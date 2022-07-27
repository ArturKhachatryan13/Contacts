import React from 'react';

import { FlatList } from 'react-native';

import Contact from './Contact';
import { selectFavorateContacts } from '../../store/selectors';

import { useSelector } from 'react-redux';

const renderItem = ({ item }) => {
  return <Contact contact={item} isFavorite />;
};

const FavorateContactsList = () => {
  const favorateContacts = useSelector(selectFavorateContacts);
  return (
    <FlatList horizontal data={favorateContacts} renderItem={renderItem} />
  );
};

export default FavorateContactsList;
