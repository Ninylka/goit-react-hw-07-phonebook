import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact} from "./operations";


  const contactsSlice = createSlice({
    name: "contacts",
      initialState: {
        items: [],
        isLoading: false,
        error: null
     
    },



  extraReducers: builder => {
    builder
    .addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(deleteContact.fulfilled, (state, action) =>{
      state.items = state.items.filter(item=> item.id !== action.payload);
    })
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});


export const contactsReducer = contactsSlice.reducer;


