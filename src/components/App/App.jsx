import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Container, Title, Contacts, Info } from './App.styled';
import { useLocalStorage } from 'hooks/useLocalStorage';

Notify.init({
  borderRadius: '10px',
  timeout: 4000,
  clickToClose: true,
  cssAnimationStyle: 'zoom',
});

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    if (contacts.some(contact => contact.name === name)) {
      return Notify.info(`${name} is already in contacts`);
    }

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    setContacts(state => [...state, contact]);
    Notify.success(`${name} has been successfully added to the contact list`);
  }

  const deleteContact = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
    Notify.success("Contact deleted successfully!");
  }

  const onFilterChange = e => {
    setFilter(e.currentTarget.value);
  }

  const filterContact = filter => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      {contacts.length ? (
        <>
          <Contacts>Contacts</Contacts>
          <Filter
            value={filter}
            onChange={onFilterChange} />
          <ContactList
            contacts={filterContact(filter)}
            onDelete={deleteContact} />
        </>
      ) : (
        <Info>No any contacts</Info>
      )}
    </Container>
  );
}

export default App;