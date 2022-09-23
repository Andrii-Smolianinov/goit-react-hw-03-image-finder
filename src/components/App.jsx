import { Component } from 'react';
// import axios from 'axios';
import { Searchbar } from 'components/Searchbar/Searchbar';

// import { nanoid } from 'nanoid';

export default class App extends Component {
  handleSearch;

  // state = {
  //   loader: false,
  //   items: [],
  //   error: null,
  //   page: 1,
  //   searchQuery: '',
  // };
  // componentDidMount() {
  //   this.fetchPosts();
  // }
  // fetchPosts() {
  //   // const { page } = this.state;
  //   this.setState({
  //     loader: true,
  //   });
  // }
  // async fetchImages() {
  //   const { page, searchQuery } = this.state;
  //   const API_KEY = '30113842-e56eb4bc3062add658b965540';
  //   const BASE_URL = 'https://pixabay.com/api/';

  //   const searchParam = new URLSearchParams({
  //     key: API_KEY,
  //     q: searchQuery,
  //     image_type: 'photo',
  //     orientation: 'horizontal',
  //     safesearch: 'true',
  //     page: page,
  //     per_page: 12,
  //   });

  //   return axios
  //     .get(`${BASE_URL}?${searchParam}`)
  //     .then(response => {
  //       if (response.status !== 200) {
  //         return Promise.reject(`Error: ${response.message}`);
  //       }
  //       if (!response.data.totalHits) {
  //         return Promise.reject('Будь-ласка, введіть коректну назву');
  //       }
  //       if (this.page === 1) {
  //       }
  //       this.incrementPage();
  //       return response.data;
  //     })
  //     .catch(err => {
  //       return Promise.reject(err);
  //     });
  // }

  render() {
    // const { loader, items, error, page } = this.state;

    return <Searchbar />;
  }
}
