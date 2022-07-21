import { generateData } from '../../utils/helperFunctions/contactsListGenerator';
import userInfo from '../../utils/constants';

const defaultState = generateData(userInfo, 50);
const ADD_CONTACT = 'ADD CONTACT';

export const contactReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const addContactAction = payload => {
  return {
    type: ADD_CONTACT,
    payload,
  };
};
