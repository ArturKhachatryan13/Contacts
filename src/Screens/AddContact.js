import React, { useState } from 'react';

import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { addContactAction } from '../store/actions';
import AddContactInput from '../ui-kit/Input/index';
import SaveButton from '../ui-kit/SaveButton';
import colors from '../../utils/colors';

import { useDispatch } from 'react-redux';

const AddContact = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [nameValue, setNameValue] = useState('');
  const [surnameValue, setSurnameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const addNewContact = () => {
    const contact = {
      name: nameValue,
      surname: surnameValue,
      number: phoneValue,
    };
    if (nameValue && phoneValue.length >= 6) {
      dispatch(addContactAction(contact));
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
        <SaveButton title="Save" onPass={addNewContact} small="small" />
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
