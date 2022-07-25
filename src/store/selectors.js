import { createSelector } from 'reselect';
import {
  getFavorateContacts,
  changeDataStructure,
  compare,
} from '../../utils/helperFunctions/contactsListGenerator';

export const selectContacts = state => state.contact;

export const selectFavorateContacts = createSelector(
  selectContacts,
  contacts => {
    return getFavorateContacts(contacts);
  },
);
export const selectContactsWithLetter = createSelector(
  selectContacts,
  contacts => {
    return changeDataStructure([...contacts].sort(compare));
  },
);
