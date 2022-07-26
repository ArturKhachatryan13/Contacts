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
export const selectSectionsContacts = createSelector(
  selectContacts,
  contacts => {
    return changeDataStructure([...contacts].sort(compare));
  },
);
export const selectLastCalls = createSelector(selectContacts, contacts => {
  return contacts.slice(0, 10);
});

export const searchContact = value =>
  createSelector(selectContacts, contacts => {
    return contacts?.filter(contact => {
      return (contact?.name + ' ' + (contact.surname ? contact?.surname : ''))
        .toUpperCase()
        .includes(value?.toUpperCase().trim());
    });
  });
