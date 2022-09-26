import PropTypes from 'prop-types';
import { ImageGalleryUl } from 'components/ImageGallery/StylesImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ items, onClick, id }) {
  return (
    <ImageGalleryUl>
      {items.map(({ webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        tags={tags}
        onClick={onClick}
        />
      ))}
    </ImageGalleryUl>
  );
}
ImageGallery.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
};
ImageGallery.defaultProps = {
  items: [],
};
