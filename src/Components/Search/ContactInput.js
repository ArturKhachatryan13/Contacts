import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
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
    marginHorizontal: 5,
    marginVertical: 0,
    width: 350,
    height: 40,
    left: 10,
    top: 10,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
  },
  inputTextContainer: {
    marginLeft: 10,
    fontSize: 14,
    width: 343,
    height: 40,
    color: 'black',
  },
});

export default ContactInput;
