import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Searchbar from 'components/Searchbar/Searchbar';
import { searchPosts } from 'components/API/API';
import { Loader } from 'components/Loader/Loader';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { GalleryModal } from 'components/Modal/Modal';

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

  render() {
    const { items, loader, error, modalOpen } = this.state;
    const isPosts = Boolean(items.length);
    const { onSearch, closeModal, openModal } = this;
    return (
      <>
        {modalOpen && (
          <GalleryModal
            onClose={closeModal}
          />
        )}
        <Searchbar onSubmit={onSearch} />
        {loader && <Loader />}
        {error && toast.error('🥴🥴🥴 Error!', { theme: 'colored' })}
        {isPosts && <ImageGallery items={items} onClick={openModal} />}
        <ToastContainer position="top-right" autoClose={2500} pauseOnHover />
      </>
    );
  }
}
