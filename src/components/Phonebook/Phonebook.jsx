// import PropTypes from 'prop-types';
import { StylesPhonebook } from './StylesPhonebook';
import { Component } from 'react';
import FormAddContact from 'components/FormAddContact/FormAddContact';
import ContactsList from 'components/ContactsList/ContactsList';
import { nanoid } from 'nanoid';

export default class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

 

  addContactInState = contact => {
    if (this.isDuplicate(contact)) {
      return alert(
        `Контакт з іменем - ${contact.name} та номером телефону - ${contact.number} вже існує у списку`
      );
    }

    this.setState(prev => {
      const newContact = {
        id: nanoid(),
        ...contact,
      };
      return {
        contacts: [...prev.contacts, newContact],
      };
    });
  };

  removeContact = id => {
    this.setState(prev => {
      const newContacts = prev.contacts.filter(item => item.id !== id);

      return {
        contacts: newContacts,
      };
    });
  };

  filterChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  isDuplicate({ name, number }) {
    const { contacts } = this.state;
    const result = contacts.find(
      item => item.name === name && item.number === number
    );
    return result;
  }

  getFilteredContacts() {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLocaleLowerCase();
      const result =
        normalizedName.includes(normalizedFilter) ||
        number.includes(normalizedFilter);
      return result;
    });
    return filteredContacts;
  }

  render() {
    const { addContactInState, filterChange, removeContact } = this;
    const { filter, contacts } = this.state;
    const addContacts = this.getFilteredContacts();
    return (
      <StylesPhonebook>
        <div className="contacts">
          <FormAddContact onSubmit={addContactInState} />
          {contacts.length > 0 && (
            <>
              <div className="filter">
                <label className="filter__label" htmlFor="">
                  Find contacts
                </label>
                <input
                  className="filter__input"
                  type="text"
                  name="filter"
                  onChange={filterChange}
                  value={filter}
                />
              </div>
              <ContactsList items={addContacts} removeContact={removeContact} />
            </>
          )}
        </div>
      </StylesPhonebook>
    );
  }
}
