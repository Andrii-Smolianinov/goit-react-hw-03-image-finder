import PropTypes from 'prop-types';
import { Overlay, Modal } from 'components/Modal/StylesModal';

export const GalleryModal = ({ src, alt }) => {
  return (
    <Overlay onClick={this.handleBackdropClick}>
      <Modal>
        <img src={this.props.largeImageURL} alt={alt} />
      </Modal>
    </Overlay>
  );
};

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
