import { createStore } from 'redux';
import { contactReducer } from './contactReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  contact: contactReducer,
});

export const store = createStore(rootReducer);
