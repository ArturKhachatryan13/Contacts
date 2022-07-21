import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Text } from 'react-native';

const AddHeaderButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.addButtonStyles}
        source={{
          uri: 'https://cdn4.iconfinder.com/data/icons/interface-80/24/add_small_interface_plus-512.png',
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButtonStyles: {
    width: 40,
    height: 40,
  },
});

export default AddHeaderButton;
