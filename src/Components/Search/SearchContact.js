import React from 'react';

import SearchButton from './SearchButton';

const SearchContact = ({ navigation, allContacts }) => {
  const navigate = () => {
    navigation.navigate('Search Contact', { contacts: allContacts });
  };
  return <SearchButton onPress={navigate} />;
};

export default SearchContact;
