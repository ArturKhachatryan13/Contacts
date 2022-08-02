import React, { useState } from 'react';

import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AddContactInput from '../ui-kit/Input/index';
import SaveContact from '../ui-kit/Button';
import colors from '../../utils/colors';
import { addContact } from '../Configs/contactsSlice';
import { ButtonSizeVariant } from '../ui-kit/Button';

import { useDispatch } from 'react-redux';

const AddContact = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [nameValue, setNameValue] = useState<string>('');
  const [surnameValue, setSurnameValue] = useState<string>('');
  const [phoneValue, setPhoneValue] = useState<string>('');

  const addNewContact = (): void => {
    const contact = {
      name: nameValue,
      surname: surnameValue,
      number: phoneValue,
    };
    if (nameValue && phoneValue.length >= 6) {
      dispatch(addContact(contact));
      navigation.goBack();
    }
  };

  return (
    <View style={styles.inputContainer}>
      <AddContactInput
        title="name"
        value={nameValue}
        onChangeText={text => {
          setNameValue(text);
        }}
      />
      <AddContactInput
        title="surname"
        value={surnameValue}
        onChangeText={text => {
          setSurnameValue(text);
        }}
      />
      <AddContactInput
        keyboardType="numeric"
        title="phone"
        value={phoneValue}
        onChangeText={text => {
          setPhoneValue(text);
        }}
      />
      <View style={styles.buttonContainer}>
        <SaveContact
          title="Save"
          onPass={addNewContact}
          small={ButtonSizeVariant.small}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingBottom: 40,
  },
});

export default AddContact;
