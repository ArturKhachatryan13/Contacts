export const ADD_CONTACT = 'ADD CONTACT';

export const addContactAction = payload => {
  return {
    type: ADD_CONTACT,
    payload,
  };
};
