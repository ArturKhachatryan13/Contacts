import React from 'react';

import { View, StyleSheet } from 'react-native';

import Colors from '../../utils/colors';
import FavorateContactsList from '../Components/List/FavorateContactsList';
import AllListContacts from '../Components/List/ContactsList';
import SearchContact from '../Components/Search/SearchContact';
import AddHeaderButton from '../Components/profileHeader/AddHeaderButton';
import Contacts from '../Navigation/routes';
import { getAllContacts } from '../Configs/selectors';

import { useSelector } from 'react-redux';

const ContactsList = () => {
  const generatedData = useSelector(getAllContacts);

  return (
    <View style={styles.mainScreenContainer}>
      <SearchContact allContacts={generatedData} />
      <FavorateContactsList />
      <AllListContacts />
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreenContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

ContactsList.options = ({ navigation }) => {
  return {
    title: 'Contacts',
    headerRight: () => {
      return (
        <AddHeaderButton
          onPress={() => {
            navigation.navigate(Contacts.ADD_CONTACT);
          }}
        />
      );
    },
  };
};

export default ContactsList;
