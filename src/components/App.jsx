import { ContactLst } from './ContactLst/ContactList';
import { Filter } from './Filter/Filter';
import { PhonebookForm } from './PhonebookForm/PhoneForm';
import { AppContainer } from './App.styled';

export const App = () => {
  return (
    <AppContainer>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactLst />
    </AppContainer>
  );
};
