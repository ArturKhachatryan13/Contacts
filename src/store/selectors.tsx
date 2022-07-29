import { createSelector } from 'reselect';
import {
  getFavorateContacts,
  changeDataStructure,
  compare,
} from '../../utils/helperFunctions/contactsListGenerator';

export const selectContacts = (state: { contacts: { contacts: [] } }) =>
  state.contacts.contacts;

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

export const searchContact = (value: string) =>
  createSelector(selectContacts, contacts => {
    return contacts.filter((contact: { name: string; surname: string }) => {
      return (contact?.name + ' ' + (contact.surname || ''))
        .toUpperCase()
        .includes(value.toUpperCase().trim());
    });
  });
