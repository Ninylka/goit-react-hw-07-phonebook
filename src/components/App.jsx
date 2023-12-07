import { ContainerDivPhonebook,TitlePhonebook, TitleContacts } from './FormContacts/FormContacts.styled';

import { ListContacts } from './ListContacts/ListContacts';
import { Filter } from './Filter/Filter';
import { FormContacts } from './FormContacts/FormContacts';


export const  App = () => {

  return (
    <ContainerDivPhonebook>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <FormContacts >
      </FormContacts>
      <TitleContacts>Contacts</TitleContacts> 
      <Filter />
      <ListContacts>
      </ListContacts>
    </ContainerDivPhonebook>
  );
}