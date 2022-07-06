import React from 'react';
import { Image, StyleSheet } from 'react-native';

const UserPicture = () => {
  return (
    <Image
      style={styles.pictureStyle}
      source={require('../../assets/images/Rectangle60.png')}
    />
  );
};

export default UserPicture;

const styles = StyleSheet.create({
  pictureStyle: {
    marginTop: 10,
    backgroundColor: '#D7E9E5',
    borderRadius: 12,
  },
});
