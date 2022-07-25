import { generateData } from '../../utils/helperFunctions/contactsListGenerator';
import userInfo from '../../utils/constants';
import { ADD_CONTACT } from './actions';

const defaultState = generateData(userInfo, 50);

export const contactReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    default:
      return state;
  }
};
