import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import { Heder } from './Contacts.styled';

export const Contacts = ({ children }) => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  return (
    <>
      <Heder>Contacts</Heder>
      {children}
      <ul>
        {visibleContacts.map(contact => (
          <ContactItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        ))}
      </ul>
    </>
  );
};
