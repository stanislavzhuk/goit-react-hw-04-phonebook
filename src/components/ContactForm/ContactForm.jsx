import { useState } from 'react';
import { Form, Label, Input, Button } from "./ContactForm.styled";
import PropTypes from 'prop-types';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') setName(value);
    if (name === 'number') {
      const phoneNumber = value.replace(/[^\d]/g, '').slice(0, 10);
      const match = phoneNumber.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);
      const formattedPhoneNumber = match
        ? `(${match[1]}) ${match[2]}-${match[3]}-${match[4]}`
        : phoneNumber;
      setNumber(formattedPhoneNumber);
    };
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onSubmitInput = e => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
  };

  return (
    <Form onSubmit={onSubmitInput}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-ЯіІїЇєЄґҐ]+(([' -][a-zA-Zа-яА-ЯіІїЇєЄґҐ ])?[a-zA-Zа-яА-ЯіІїЇєЄґҐ]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter contact name"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={onChange}
          pattern="\(\d{3}\) \d{3}-\d{2}-\d{2}"
          title="Pone number must consist of 10 digits. For exemple 0987654321"
          placeholder="(XXX) XXX XX XX"
          maxLength="10"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;