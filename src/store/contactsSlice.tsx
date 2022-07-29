import { createSlice } from '@reduxjs/toolkit';
import { generateData } from '../../utils/helperFunctions/contactsListGenerator';
import userInfo from '../../utils/constants';
import { Icontact } from '../store/types';

interface ContactsState {
  contacts: Icontact[];
}
const initialState: ContactsState = {
  contacts: generateData(userInfo, 50),
};

const contactsSlice = createSlice({
  name: 'ContactsBook',
  initialState: initialState,
  reducers: {
    addContact(state: ContactsState, action: any) {
      state.contacts.push({
        ...action.payload,
        id: Math.random(),
        favorite: Math.random() <= 0.3 ? true : false,
      });
    },
  },
});

export default contactsSlice.reducer;
export const { addContact } = contactsSlice.actions;
