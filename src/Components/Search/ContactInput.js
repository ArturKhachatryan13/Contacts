import React from 'react';

import { TextInput, View, StyleSheet } from 'react-native';

import Colors from '../../../utils/colors';

const ContactInput = ({ onChangeText, value }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        autoFocus={true}
        style={styles.inputTextContainer}
        placeholder="Search"
        value={value}
        onChangeText={onChangeText}
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
