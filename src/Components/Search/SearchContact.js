import React from 'react';
import Contacts from '../../Navigation/routes';
import { useNavigation } from '@react-navigation/native';

import SearchButton from './SearchButton';

const SearchContact = ({ allContacts }) => {
  const navigation = useNavigation();

  const contactNavigate = () => {
    navigation.navigate(Contacts.CONTACTS, { contacts: allContacts });
  };
  return <SearchButton onPress={contactNavigate} />;
};

export default SearchContact;
