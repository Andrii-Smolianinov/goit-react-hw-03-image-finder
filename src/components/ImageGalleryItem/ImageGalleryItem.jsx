import PropTypes from 'prop-types';
import {
  ImageGalleryItemLi,
  ImageGalleryImage,
} from 'components/ImageGalleryItem/StylesImageGalleryItem';

export const ImageGalleryItem = ({ src, alt }) => {
  return (
    <ImageGalleryItemLi>
      <ImageGalleryImage src={src} alt={alt} />
    </ImageGalleryItemLi>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
