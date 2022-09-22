import PropTypes from 'prop-types';

export default function ContactsList({ items, removeContact }) {
  const elements = items.map(({ name, number, id }) => {
    return (
      <li className="contacts__item" key={id}>
        <a href="tel:{number}">{name}: {number}{' '}</a>
        
        <button
          className="contacts__item-del"
          onClick={() => removeContact(id)}
        >
          delete
        </button>
      </li>
    );
  });
  return <ul className="contacts__list">{elements}</ul>;
}

ContactsList.propTypes = {
  items: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
