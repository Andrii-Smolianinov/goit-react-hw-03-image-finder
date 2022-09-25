// import PropTypes from 'prop-types';
import {
  ImageGalleryItemLi,
  ImageGalleryImage,
} from 'components/ImageGalleryItem/StylesImageGalleryItem';

export const ImageGalleryItem = ({ alt, src, largeImageURL, onClick }) => {
  return (
    <ImageGalleryItemLi>
      <ImageGalleryImage
        onClick={() => onClick(largeImageURL)}
        src={src}
        alt={alt}        
      />
    </ImageGalleryItemLi>
  );
};

// ImageGalleryItem.propTypes = {
//   tags: PropTypes.string.isRequired,
//   webformatURL: PropTypes.string.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
// };
