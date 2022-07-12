import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SearchButton = () => {
  return (
    <View style={styles.searchButtonContainer}>
      <Image
        source={require('../../../src/assets/images/Search.png')}
        style={styles.imageStyles}
      />
      <Text style={styles.searchTextStyles}>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchButtonContainer: {
    width: 350,
    height: 40,
    left: 10,
    top: 10,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#EFF0F7',
    borderRadius: 12,
  },
  imageStyles: {
    marginLeft: 18,
    marginRight: 10,
  },
  searchTextStyles: {
    fontSize: 14,
    lineHeight: 24,
    width: 46,
    height: 24,
    color: '#A0A3BD',
  },
});
export default SearchButton;
