import React from 'react';
import UserInitial from './UserInitial';
import UserPicture from './UserPicture';

const ContactImage = ({ contact }) => {
  return contact.photo ? <UserPicture /> : <UserInitial contact={contact} />;
};

export default ContactImage;
