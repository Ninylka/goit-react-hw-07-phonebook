
import { nanoid } from 'nanoid';
import { FormPhonebook,ButtonPhonebook,LabelPhonebook,InputPhonebookName,InputPhonebookNumber } from './FormContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from 'redux/contactsSlice';
import { selectContacts } from 'redux/selectors';


export const FormContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts)
  const [form, setForm] = useState({name: '', number: ''} );
const {name, number} = form;

  const handleChange = (e) => {
    const {name , value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }))};

    
      

 const  handleSubmit = (e) => {
    e.preventDefault();
   
    if (contacts.some((contact) => contact.name.toLowerCase() === form.name.toLowerCase())) {
      alert(`${form.name} already in contacts`);
      return;
    }
    const contact = {
      name,
      number,
id: nanoid()
    };
    dispatch(addContact(contact));
   setForm({name: '', number: ''})
  };


  return (
        
    <FormPhonebook onSubmit={handleSubmit}>
      <LabelPhonebook>
        Name
        <InputPhonebookName
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </LabelPhonebook>
      <LabelPhonebook>
        Number
        <InputPhonebookNumber
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </LabelPhonebook>
      <ButtonPhonebook type="submit">Add contact</ButtonPhonebook>
    </FormPhonebook>

);

}


