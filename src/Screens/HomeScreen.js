import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  generateData,
  changeDataStructure,
  compare,
  getFavorateContacts,
} from '../../utils/helperFunctions/contactsListGenerator';
import userInfo from '../../utils/constants';
import Colors from '../../utils/colors';
import FavorateContactsList from '../Components/List/FavorateContactsList';
import AllListContacts from '../Components/List/ContactsList';
import SearchContact from '../Components/Search/SearchContact';

const generetedData = generateData(userInfo, 50);
const favorateContacts = getFavorateContacts(generetedData);
const contacts = changeDataStructure([...generetedData].sort(compare));

const ContactsList = () => {
  return (
    <View style={styles.mainScreencontainer}>
      <SearchContact allContacts={generetedData} />
      <FavorateContactsList data={favorateContacts} />
      <AllListContacts contacts={contacts} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreencontainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default ContactsList;
