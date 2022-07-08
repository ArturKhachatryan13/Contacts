import React from 'react';

import FavoriteContact from './FavoriteContact';
import EveryContact from './EveryContact';

const Contact = ({ contact, isFavorite }) =>
  isFavorite ? (
    <FavoriteContact contact={contact} />
  ) : (
    <EveryContact contact={contact} />
  );

export default Contact;
