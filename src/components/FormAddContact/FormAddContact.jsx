import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default class FormAddContact extends Component {
  state = {
    name: '',
    number: '',
  };
  nameId = nanoid();
  numberId = nanoid();

  changeInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  addContact = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name, number });
    this.setState({ name: '',  number: '', });
  };

  render() {
    const { nameId, numberId, addContact, changeInput } = this;
    return (
      <form onSubmit={addContact}>
        <h1>
          <span className="spanP">P</span>honebook
        </h1>
        <div className="contacts__name">
          <label htmlFor={nameId}>Name</label>
          <input
            id={nameId}
            value={this.state.name}
            onChange={changeInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Назва може містити лише літери, апостроф, тире та пробіли. Наприклад Anrian, Marco van Basten, Sharl de d'Artagnan"
            required
          />
        </div>
        <div className="contacts__number">
          <label htmlFor={numberId}>Number</label>
          <input
            id={numberId}
            value={this.state.number}
            onChange={changeInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефону має складатися з цифр. Може містити пробіли, тире, круглі дужки та починатися з +"
            required
          />
        </div>
        <button className="contacts__button">Add contact</button>
      </form>
    );
  }
}

FormAddContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
};
