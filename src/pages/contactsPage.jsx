import { ContactForm } from '../components/ContactForm';
import { ContactList } from '../components/ContactList';
import { Filter } from '../components/Filter';
import { Loader } from '../components/Loader';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/Contacts/Contact-list/contacts-operations';
import { useSelector, useDispatch } from 'react-redux';

export const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(fetchContacts());
  }, [dispatch]);

  const pending = useSelector(store => store.contacts.isLoading);
  return (
    <main>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Search contact</h2>
      <Filter />
      <ContactList />
      {pending && <Loader />}
    </main>
  );
};
