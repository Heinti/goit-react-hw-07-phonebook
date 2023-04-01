import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactInitialState = [
  { id: 'flxGZNDrY0FY-EyCOe7eP', name: 'oleh', number: 6546546454 },
  { id: 'v1TUUVENOKSEI9SdOzeH1', name: 'yrtyrt', number: 543534534543 },
  { id: 'y0G7uD7jbadMSEh9JQR5X', name: 'yrtyrttr', number: 53454354343 },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
    return state.filter(item => item.id !== action.payload)
    }
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;

// console.log(tasksSlice)
// { id: nanoid(), name: data.name, number: data.number }
