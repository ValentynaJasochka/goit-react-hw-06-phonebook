import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialStateContacts } from './constants';

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts = [...state.contacts, action.payload];
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = ContactsSlice.actions;
export const contactsReducer = ContactsSlice.reducer;
