import React from 'react';
import { FlatList } from 'react-native';

import Contact from './Contact';

const renderItem = ({ item }) => {
  return <Contact contact={item} isFavorite />;
};

const FavorateContactsList = ({ data }) => {
  return <FlatList horizontal data={data} renderItem={renderItem} />;
};

export default FavorateContactsList;
