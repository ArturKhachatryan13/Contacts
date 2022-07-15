import React from 'react';

import { TextInput, View, StyleSheet } from 'react-native';

import Colors from '../../../utils/colors';

const ContactInput = ({ getSearchInputValue, contactName }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        autoFocus={true}
        style={styles.inputTextContainer}
        placeholder="Search"
        value={contactName}
        onChangeText={getSearchInputValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 16,
    marginVertical: 10,
    marginBottom: 25,
    height: 40,
    justifyContent: 'center',
    backgroundColor: Colors.christmas_silver,
    borderRadius: 12,
  },
  inputTextContainer: {
    marginLeft: 10,
    fontSize: 14,
    color: Colors.black,
  },
});

export default ContactInput;
