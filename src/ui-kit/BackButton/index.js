import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Image
        style={styles.arrowIcon}
        source={require('../../../src/assets/images/Stroke1.png')}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 1,
    borderRadius: 14,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    marginHorizontal: 20,
    borderColor: '#A0A3BD',
  },
  arrowIcon: {
    tintColor: '#A0A3BD',
  },
});

export default BackButton;
