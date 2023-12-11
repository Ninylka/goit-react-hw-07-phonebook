
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonDelete, ItemContact } from '../FormContacts/FormContacts.styled'
import { deleteContact } from 'reduxFile/operations';
import {  selectVisibleContacts } from 'reduxFile/selectors';


export const ListContacts = () => {
const dispatch = useDispatch();

const visibleContacts = useSelector(selectVisibleContacts);


const handleDelete = (contactId) => {

  dispatch(deleteContact(contactId))};
  return (
    <ul>
      {visibleContacts.map((contact) => (
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


