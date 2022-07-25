import React from 'react';

import { FlatList } from 'react-native';

import Contact from './Contact';
import { selectFavorateContacts } from '../../store/selectors';

import { useSelector } from 'react-redux';

const renderItem = ({ item }) => {
  return <Contact contact={item} isFavorite />;
};

const FavorateContactsList = ({ vertical }) => {
  const favorateContacts = useSelector(selectFavorateContacts);
  return (
    <FlatList
      horizontal={!vertical}
      data={favorateContacts}
      renderItem={renderItem}
    />
  );
};

export default FavorateContactsList;
