import ContactCard from 'components/ContactCard/ContactCard';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/helpers';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  // const filter = useSelector(state => state.filter.filter);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <List>
      {contacts.map(contact => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onDelete={() => handleDelete(contact.id)}
        />
      ))}
    </List>
  );
};

export default ContactList;
