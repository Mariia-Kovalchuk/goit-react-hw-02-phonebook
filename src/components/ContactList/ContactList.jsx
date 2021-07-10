import style from './ContactList.module.css'
import PropTypes from "prop-types";


const ContactList = ({ contacts, onDeleteContact}) => {
    return (
    <ul >
        {contacts.map(({ id, name, number }) => (
            <li key={id} className={style.contactItem}>
                <p >{name}</p>
                <p >{number}</p>
                <button
                    type="button"
                    onClick={() => onDeleteContact(id)}
                >
                    Удалить
                </button>
            </li>
        ))}
        </ul>
    )
};


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired
};

export default ContactList;