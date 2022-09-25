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

export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleInputChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      //перевірка на порожній рядок при відправці формию.trim відрізає від рядка пробіли, якщо вони є
      toast.warn("🥴🥴🥴 введіть запит!", { theme: "colored" });
      return;
    }
    this.props.searchFunc(this.state.searchQuery); //searchFunc - пропс у якому передається searchbarSubmit з App. звязуємо state з App.
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <HeaderSearchbar>
        <SearchForm onSubmit={this.handleSubmit}>
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
            onChange={this.handleInputChange}
            value={this.state.searchQuery}
          />
        </SearchForm>
      </HeaderSearchbar>
    );
  }
}
