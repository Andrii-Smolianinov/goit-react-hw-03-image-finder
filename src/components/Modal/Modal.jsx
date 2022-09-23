import PropTypes from 'prop-types';
import { Overlay, Modal } from 'components/Modal/StylesModal';

export const GalleryModal = ({ src, alt }) => {
  return (
    <Overlay>
      <Modal>
        <img src={src} alt={alt} />
      </Modal>
    </Overlay>
  );
};

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
