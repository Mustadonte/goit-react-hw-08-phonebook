import { getFilteredContacts } from 'redux/Contacts/Contact-list/';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/Contacts/Contact-list/contacts-operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id} // To remove warning from Console.
          id={id}
          name={name}
          number={number}
          onDeleteBtn={() => dispatch(removeContact(id))}
        />
      ))}
    </ul>
  );
};
