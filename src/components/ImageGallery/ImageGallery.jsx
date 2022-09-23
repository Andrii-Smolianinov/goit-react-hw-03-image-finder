import PropTypes from 'prop-types';
import { StylesImageGallery } from 'components/ImageGallery/StylesImageGallery';

export const ImageGallery = () => {
  return (
    <StylesImageGallery>
      <ul class="gallery"></ul>
    </StylesImageGallery>
  );
};

ImageGallery.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
