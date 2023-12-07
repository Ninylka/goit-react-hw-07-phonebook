  

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import { ButtonDelete, ItemContact } from '../FormContacts/FormContacts.styled'

export const ListContacts = () => {
const dispatch = useDispatch();
const contacts = useSelector((state) => state.contacts.items)
const filterValue = useSelector((state) => state.filter.value);
const filteredContacts = contacts.filter((contact) =>
contact.name.toLowerCase().includes(filterValue.toLowerCase())
);

const handleDelete = (contactId) => {

  dispatch(deleteContact(contactId))};
  return (
    <ul>
      {filteredContacts.map((contact) => (
        <ItemContact 
        key={contact.id}>
          {contact.name} : {contact.number}{''} 
          <ButtonDelete type="button" onClick={() => handleDelete(contact.id)}>
            Delete
            </ButtonDelete>
            </ItemContact>
        
      ))}
      
    </ul>
  );
};


