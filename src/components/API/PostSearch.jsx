import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from 'components/Searchbar/Searchbar';
import { searchPosts } from 'components/API/API';
import { Loader } from 'components/Loader/Loader';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import  GalleryModal  from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';
import { nanoid } from 'nanoid';

export default class PostsSearch extends Component {
  state = {
    loader: false,
    items: [],
    error: null,
    page: 1,
    searchQuery: '',
    modalOpen: false,
  };

  componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (
      (searchQuery && prevState.searchQuery !== searchQuery) ||
      page > prevState.page
    ) {
      this.fetchPosts(searchQuery, page);
    }
  }

  async fetchPosts() {
    const { searchQuery, page } = this.state;
    this.setState({
      loader: true,
    });

    try {
      const data = await searchPosts(searchQuery, page);

      this.setState(({ items }) => {
        return {
          items: [...items, ...data.hits],
        };
      });
    } catch (error) {
      this.setState({
        error,
      });
      toast.error('Oops, an error occurred', { theme: 'colored' });
    } finally {
      this.setState({
        loader: false,
      });
    }
  }

  onSearch = ({ searchQuery }) => {
    this.setState({
      searchQuery,
    });
  };

  openModal = () => {
    this.setState({
      modalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
    });
  };

  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };
  itemsId = nanoid();
  render() {
    const { items, loader, error, modalOpen } = this.state;
    const isPosts = Boolean(items.length);
    const { onSearch, closeModal, openModal, itemsId, loadMore, toast } = this;
    return (
      <>
        {modalOpen && <GalleryModal onClose={closeModal} />}
        <Searchbar onSubmit={onSearch} />
        {loader && <Loader />}
        {error && toast.error('🥴🥴🥴 Error!', { theme: 'colored' })}
        {isPosts && (
          <ImageGallery items={items} onClick={openModal} id={itemsId} />
        )}
        {isPosts && <Button loadMore={loadMore} />}
        <ToastContainer position="top-right" autoClose={2000} pauseOnHover />
      </>
    );
  }
}
