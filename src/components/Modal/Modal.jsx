import PropTypes from 'prop-types';
import { StylesModal } from 'components/Modal/StylesModal';

export const Modal = () => {
  return (
    <StylesModal>
      <li class="gallery-item">
        <img src="" alt="" />
      </li>
    </StylesModal>
  );
};

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};