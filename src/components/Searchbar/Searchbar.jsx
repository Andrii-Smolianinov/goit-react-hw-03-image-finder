import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import {
  HeaderSearchbar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from 'components/Searchbar/StylesSearchbar';
import { nanoid } from 'nanoid';

export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleInputChange = event => {
    this.setState({ searchQuery: event.target.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      toast.warn('🥴🥴🥴 введіть запит!', { theme: 'colored' });
      return;
    }
    this.props.searchFunc(this.state.searchQuery); //searchFunc - пропс у якому передається searchbarSubmit з App. звязуємо state з App.
    this.setState({ searchQuery: '' });
  };
  searchId = nanoid();
  render() {
    const { searchQuery } = this.state;
    const { handleSubmit, handleInputChange, searchId } = this;
    return (
      <HeaderSearchbar>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
            <ImSearch style={{ marginRight: 8 }} />
            <SearchFormButtonLabel></SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleInputChange}
            value={searchQuery} 
            id={searchId}
          />
        </SearchForm>
      </HeaderSearchbar>
    );
  }
}
