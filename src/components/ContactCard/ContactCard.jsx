import { Item, Btn } from './ContactCard.styled';

const ContactCard = ({ contact: { id, name, phone }, onDelete }) => {
  return (
    <Item key={id}>
      <span>{name}: </span>
      <span>{phone} </span>
      <Btn type="button" onClick={() => onDelete(id)}>
        Delete
      </Btn>
    </Item>
  );
};

export default ContactCard;
