// import PropTypes from 'prop-types';
import { StylesImageFinder } from './StylesImageFinder';
import { Component } from 'react';

import Loader from 'components/Loader/Loader'

// import { nanoid } from 'nanoid';

export default class ImageFinder extends Component {
  state = {
    
  };

  

 
  render() {
    
    return (
      <StylesImageFinder>
      <Loader>
      <div>Hallo ImageFinder</div>
      </Loader>
      </StylesImageFinder>
    );
  }
}
