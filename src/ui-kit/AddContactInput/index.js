import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = ({ title, value, onChangeText, keyboardType }) => {
  return (
    <View>
      <TextInput
        keyboardType={keyboardType}
        style={styles.inputStyles}
        placeholder={title}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyles: {
    justifyContent: 'center',
    height: 40,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 12,
    borderWidth: 1,
  },
});

export default Input;
