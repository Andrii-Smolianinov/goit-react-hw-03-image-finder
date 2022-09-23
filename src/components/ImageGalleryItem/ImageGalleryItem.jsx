import PropTypes from 'prop-types';
import { StylesImageGalleryItem } from 'components/ImageGalleryItem/StylesImageGalleryItem';

export const ImageGalleryItem = () => {
  return (
    <StylesImageGalleryItem>
      <li class="gallery-item">
        <img src="" alt="" />
      </li>
    </StylesImageGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
