import React from 'react';

import { FlatList } from 'react-native';

import EveryContact from '../List/EveryContact';

const ContactsBar = ({ data }) => {
  const renderContact = ({ item }) => {
    return <EveryContact contact={item} />;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderContact}
      keyExtractor={item => item.id}
    />
  );
};

export default ContactsBar;
