import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contactsSlice';

const rootReducer = combineReducers({
  contacts: contactsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
