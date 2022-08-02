import React, { FC } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

type BackButton = {
  onPress: () => void;
};

const BackButton: FC<BackButton> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Image
        style={styles.arrowIcon}
        source={require('../../../src/assets/images/Stroke.png')}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
    justifyContent: 'center',
  },
  arrowIcon: {
    tintColor: colors.shock_blue,
  },
});

export default BackButton;
