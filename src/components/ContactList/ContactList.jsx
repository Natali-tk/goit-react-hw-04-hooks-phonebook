import PropTypes from 'prop-types';
import { MdContactPhone } from 'react-icons/md';
import s from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteClick }) {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contact}>
            <MdContactPhone className={s.icon} />
            <p>
              {name}: {number}
            </p>
            <button
              className={s.buttonDelete}
              type="button"
              onClick={() => onDeleteClick(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
