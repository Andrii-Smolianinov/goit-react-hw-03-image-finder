// import PropTypes from 'prop-types';
import {
  ImageGalleryItemLi,
  ImageGalleryImage,
} from 'components/ImageGalleryItem/StylesImageGalleryItem';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onClick,
}) => {
  return (
    <ImageGalleryItemLi>
      <ImageGalleryImage
        src={webformatURL}
        alt={tags}
        onClick={() => onClick(largeImageURL)}
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
