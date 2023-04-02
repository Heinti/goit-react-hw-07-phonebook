import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operators';


// const contactInitialState = [
//   { id: 'flxGZNDrY0FY-EyCOe7eP', name: 'oleh', number: 6546546454 },
//   { id: 'v1TUUVENOKSEI9SdOzeH1', name: 'yrtyrt', number: 543534534543 },
//   { id: 'y0G7uD7jbadMSEh9JQR5X', name: 'yrtyrttr', number: 53454354343 },
// ];

const handlePending = state =>{
  state.isLoading = true;
}
const handleRejected = (state, {payload})=>{
  state.isLoading = false;
  state.error = payload
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers:{
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, {payload}){
      state.isLoading = false;
      state.error = null;
      state.contacts = payload;
    },
    [fetchContacts.error]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, {payload}){
      state.isLoading = false;
      state.error = null;
      state.contacts.push(payload)
    },
    [addContact.error]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action){
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [deleteContact.error]: handleRejected,
    
  }
  },
);


export const contactsReducer = contactSlice.reducer;

// console.log(tasksSlice)
// { id: nanoid(), name: data.name, number: data.number }
