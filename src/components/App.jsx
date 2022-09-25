import { Component } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import Searchbar from 'components/Searchbar/Searchbar';

export default class App extends Component {
  state = {
    loader: false,
    items: [],
    error: null,
    page: 1,
    searchQuery: '',
    limit: 12,
  };

  //у componentDidMount робимо http запит та передаєм ф-цію fetchPosts яка обробляє запит
  componentDidMount() {
    this.setState({
      loader: true,
    });
    this.fetchPosts();
  }

  //приймає prevProps та prevState. У даному випадку нам не потрібно prevProps тому "_,". Зміна пропсів та стейту повторно викликає componentDidUpdate. необхідно перевіряти щоб не було зациклення.
  componentDidUpdate(_, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      this.fetchPosts();
    }
  }

  fetchPosts() {
    const { searchQuery, limit, page } = this.state;
    this.setState({
      loader: true, //підключаємо loader доки обробляється http запит
    });

    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '30113842-e56eb4bc3062add658b965540';

    axios
      .get(
        `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&_page${page}&per_page=${limit}&image_type=photo`
      )
      .then(({ data }) => {
        console.log('data', data);
        this.setState(({ items }) => {
          return {
            items: [...items, ...data.hits],
          };
        });
      })
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({
          loader: false,
        });
      });
  }
  // ф-ція loadMore додає функціонал на кнопку "Load more"
  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };
  //ф-ція передає Submit на Searchbar
  searchbarSubmit = searchQuery => {
    this.setState({ searchQuery });
  };
  render() {
    const { items, loader, error } = this.state;
    const isPosts = Boolean(items.length);
    const { loadMore } = this;
    return (
      <div>
        <Searchbar searchFunc={this.searchbarSubmit} />
        {loader && <Loader />}
        {error && <p>omg...</p>}
        {isPosts && <ImageGallery items={items}></ImageGallery>}
        {isPosts && <Button onLoadMore={loadMore} />}
        <ToastContainer position="top-right" autoClose={2500} pauseOnHover />
      </div>
    );
  }
}
