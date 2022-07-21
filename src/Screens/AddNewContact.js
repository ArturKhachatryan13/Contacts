import React, { useState } from 'react';

import { View, StyleSheet } from 'react-native';

import AddContactInput from '../ui-kit/AddContactInput/index';
import SaveButton from '../ui-kit/SaveButton/SaveButton';
import { useNavigation } from '@react-navigation/native';
import colors from '../../utils/colors';
import { useDispatch } from 'react-redux';
import { addContactAction } from '../store/contactReducer';

const AddNewContact = () => {
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
      id: Math.random(),
      favorate: Math.random() <= 0.3 ? true : false,
    };
    if (nameValue && phoneValue.length >= 6) {
      dispatch(addContactAction(contact));
      navigation.goBack();
      console.log(contact);
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
        <SaveButton onPass={addNewContact} />
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

export default AddNewContact;
