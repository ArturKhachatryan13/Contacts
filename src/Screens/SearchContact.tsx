import React, { useState, useCallback, useRef } from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';

import ContactInput from '../Components/Search/ContactInput';
import ContactsBar from '../Components/Search/ContactsBar';
import BackButton from '../ui-kit/BackButton';
import Colors from '../../utils/colors';

import { useSelector } from 'react-redux';
import { searchContact, selectLastCalls } from '../Configs/selectors';

const SearchContact = () => {
  const timeoutRef: { current: any } = useRef();
  const mockData = useRef(useSelector(selectLastCalls));
  const [value, setValue] = useState<string>('');
  const [data, setData] = useState(mockData.current);
  const selectedContact = useSelector(searchContact(value));

  const setSearchInputValue = (text: string) => {
    setValue(text);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      getNecessaryContact(text);
    }, 500);
  };

  const getNecessaryContact = useCallback(
    (text: string) => {
      setData(text ? selectedContact : mockData.current);
    },
    [selectedContact],
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

SearchContact.options = ({ navigation }: { navigation: any }) => {
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

export default SearchContact;
