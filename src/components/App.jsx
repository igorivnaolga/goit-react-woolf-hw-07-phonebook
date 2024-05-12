import { ContactForm } from './ContactForm/ContactForm';
import { Container, Title, SubTitle } from './App.styled';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { fetchContacts } from '../redux/helpers';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  console.log(contacts);
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      {contacts.length > 0 ? <Filter /> : <p>You don't have any contacts</p>}
      {isLoading && <p>Loading contacts...</p>}
      {contacts.length > 0 && <ContactList />}
      {error && <p>{error}</p>}
    </Container>
  );
};
