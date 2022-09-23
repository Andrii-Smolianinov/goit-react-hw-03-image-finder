import PropTypes from 'prop-types';
import { StylesSearchbar } from 'components/Searchbar/StylesSearchbar';

export const Searchbar = ({ onSubmit }) => {
  return (
    <StylesSearchbar>
      <header class="searchbar">
        <form class="form">
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </StylesSearchbar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
