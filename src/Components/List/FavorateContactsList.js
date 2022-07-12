import React from 'react';
import { FlatList } from 'react-native';

import Contact from './Contact';

const renderItem = ({ item }) => {
  return <Contact contact={item} isFavorite />;
};

const FavorateContactsList = ({ data, vertical }) => {
  return (
    <FlatList horizontal={!vertical} data={data} renderItem={renderItem} />
  );
};

export default FavorateContactsList;
