import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { getPosts } from 'components/API/API';


export default class Posts extends Component {
  state = {
    loader: false,
    items: [],
    error: null,
    page: 1,
   
  };

    componentDidMount() {
    this.setState({
      loader: true,
    });
    this.fetchPosts();
  }

   componentDidUpdate(_, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      this.fetchPosts();
    }
  }

  async fetchPosts() {
    const { page } = this.state;
    this.setState({
      loader: true, 
    });

    try {
      const data = await getPosts(page);
      this.setState(({ items }) => {
        return {
          items: [...items, ...data.hits],
        };
      });
    } catch (error) {
      this.setState({
        error,
      });
    } finally {
      this.setState({
        loader: false,
      });
    }
  }

  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };
 

  render() {
    const { items, loader, error } = this.state;
    const isPosts = Boolean(items.length);
    const { loadMore } = this;
    return (
      <div>
        {loader && <Loader />}
        {error && toast.warn('спробуйте ще', { theme: 'colored' })}
        {isPosts && <ImageGallery items={items} onClick={this.onOpenModal}></ImageGallery>}        
        {isPosts && <Button loadMore={loadMore} />}        
        <ToastContainer position="top-right" autoClose={2000} pauseOnHover />
      </div>
    );
  }
}
