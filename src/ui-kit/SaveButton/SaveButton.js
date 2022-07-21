import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
const SaveButton = ({ onPass }) => {
  return (
    <TouchableOpacity style={styles.buttonStyes} onPress={onPass}>
      <Text>Save</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyes: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    width: 80,
    height: 40,
  },
});

export default SaveButton;
