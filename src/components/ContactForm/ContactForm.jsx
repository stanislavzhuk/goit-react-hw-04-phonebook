import { Component } from 'react';
import { Form, Label, Input, Button } from "./ContactForm.styled";
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChange = evt => {
    const { name, value } = evt.currentTarget;
    if (name === 'number') {
      // Phone number formatting
      const phoneNumber = value.replace(/[^\d]/g, '').slice(0, 10);
      const match = phoneNumber.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);
      const formattedPhoneNumber = match
        ? `(${match[1]}) ${match[2]}-${match[3]}-${match[4]}`
        : phoneNumber;
      this.setState({ [name]: formattedPhoneNumber });
    } else {
      this.setState({ [name]: value });
    }
  };
  
  onSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.onChange}
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
            onChange={this.onChange}
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
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};