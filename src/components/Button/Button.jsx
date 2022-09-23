import PropTypes from 'prop-types';
import { StylesButton } from 'components/Button/StylesButton';

export const Button = () => {
  return (
    <StylesButton>
      
    </StylesButton>
  );
};

Button.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};