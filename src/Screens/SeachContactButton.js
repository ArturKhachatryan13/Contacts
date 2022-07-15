import React, { useState, useTransition, useEffect } from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import ContactInput from '../Components/Search/ContactInput';
import ContactsBar from '../Components/Search/ContactsBar';
import BackButton from '../ui-kit/BackButton';

const debounce = () => {};

const SeachContact = ({ route }) => {
  const contactsList = route.params.contacts;
  const [contactName, setContactName] = useState('');
  const [filteredValue, setFilteredValue] = useState('');

  const setSearchInputValue = name => {
    setContactName(name);
    // I have to finish this part
    debounce(() => {
      setFilteredValue(name);
    });
  };

  console.log('outside Transition', contactName);

  const getNecesseryContact = () => {
    return contactsList.filter(contact =>
      (contact?.name + ' ' + contact.surname)
        .toUpperCase()
        .includes(filteredValue.toUpperCase().trim()),
    );
  };
  const mockContactsData = contactsList.slice(0, 10);

  return (
    <SafeAreaView style={styles.searchModalContainer}>
      <ContactInput
        contactName={contactName}
        getSearchInputValue={setSearchInputValue}
      />
      <ContactsBar
        data={filteredValue ? getNecesseryContact() : mockContactsData}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchModalContainer: {
    backgroundColor: 'white',
  },
});

SeachContact.options = ({ navigation }) => {
  return {
    title: 'Contacts',
    presentation: 'modal',
    headerLeft: () => {
      return (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      );
    },
  };
};

export default SeachContact;
