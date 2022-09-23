import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import {
  HeaderSearchbar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from 'components/Searchbar/StylesSearchbar';

export const Searchbar = ({ onSubmit }) => {
  return (
    <HeaderSearchbar>
      <SearchForm>
        <SearchFormButton type="submit" onClick={onSubmit}>
          <ImSearch style={{ marginRight: 8 }} />
          <SearchFormButtonLabel></SearchFormButtonLabel>
        </SearchFormButton>
        <SearchFormInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </HeaderSearchbar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
