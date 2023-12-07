import axios from "axios";

axios.defaults.baseURL = 'https://6570481a09586eff66410c46.mockapi.io';


  export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll', 
    async () => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      throw error;
    }
  });

  export const fetchAddContacts = createAsyncThunk(
    'contacts/addContact', 
    async (contactId, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', `${contactId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  });

  export const fetchDeleteContacts = createAsyncThunk(
    'contacts/deleteContact', 
    async (contactId, thunkAPI) => {
    try {
       await axios.delete('/contacts', `${contactId}`);
      return contactId;
    } catch (error) {
      throw error;
    }
  });
