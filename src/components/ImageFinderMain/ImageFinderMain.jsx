// import PropTypes from 'prop-types';
import { SectionStyles } from 'components/ImageFinderMain/SectionStyles';
import { Component } from 'react';
import axios from 'axios';

// import { nanoid } from 'nanoid';

export default class ImageFinder extends Component {
  state = {
    loader: false,
    items: [],
    error: null,
    page: 1,
  };
componentDidMount( ) {
  this.fetchPosts()
}
fetchPosts() {
  const { page } = this.state;
  this.setState( {
    loader: true,
  })
}
const API_KEY = "30113842-e56eb4bc3062add658b965540"



  render() {
    const { loader, items, error, page } = this.state;

    return (
      <SectionStyles>
        <div>Hallo ImageFinder</div>
        <div>Hallo ImageFinder</div>
      </SectionStyles>
    );
  }
}
