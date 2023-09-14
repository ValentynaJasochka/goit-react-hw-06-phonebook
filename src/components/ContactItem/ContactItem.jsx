import { deleteContact } from 'redux/ContactsSlice';
import { useDispatch } from 'react-redux';
import { Button, ContactStyle, Name } from './ContactItem.styled';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <ContactStyle>
      <Name>
        {name}: {number}
      </Name>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </ContactStyle>
  );
};
