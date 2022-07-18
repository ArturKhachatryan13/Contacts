import React from 'react';

import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../../../utils/colors';

const SearchButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.searchButtonContainer}>
      <Image
        source={require('../../../src/assets/images/Search.png')}
        style={styles.imageStyles}
      />
      <Text style={styles.searchTextStyles}>Search</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  searchButtonContainer: {
    height: 40,
    marginHorizontal: 16,
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.aircraft_white,
    borderRadius: 12,
  },
  imageStyles: {
    marginLeft: 18,
    marginRight: 5,
  },
  searchTextStyles: {
    fontSize: 14,
    color: Colors.blue_buzz,
  },
});
export default SearchButton;
