import { useRoute } from '@react-navigation/native';
import React, { useState, useCallback, useRef } from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import ContactInput from '../Components/Search/ContactInput';
import ContactsBar from '../Components/Search/ContactsBar';
import BackButton from '../ui-kit/BackButton';
import Colors from '../../utils/colors';

const SeachContact = () => {
  const route = useRoute();
  const timeoutRef = useRef();
  const contactsList = route.params.contacts;
  const mockData = useRef(contactsList.contact.slice(0, 10));
  const [value, setValue] = useState('');
  const [data, setData] = useState(mockData.current);

  const setSearchInputValue = text => {
    setValue(text);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      getNecesseryContact(text);
    }, 200);
  };

  const getNecesseryContact = useCallback(
    text => {
      setData(
        text
          ? contactsList?.contact.filter(contact => {
              return (
                contact?.name +
                ' ' +
                (contact.surname ? contact?.surname : '')
              )
                .toUpperCase()
                .includes(text.toUpperCase().trim());
            })
          : mockData.current,
      );
    },
    [contactsList],
  );

  return (
    <SafeAreaView style={styles.searchModalContainer}>
      <ContactInput value={value} onChangeText={setSearchInputValue} />
      <ContactsBar data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchModalContainer: {
    backgroundColor: Colors.white,
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
