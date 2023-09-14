import { ContactForm } from '../ContactForm/ContactForm';
import { Contacts } from '../Contacts/Contacts';
import { Filter } from '../Filter/Filter';
import { Container, Heder } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Heder>Phonebook</Heder>
      <ContactForm />

      <Contacts>
        <Filter />
      </Contacts>
    </Container>
  );
};
