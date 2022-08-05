import React, { FC } from 'react';

import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

import colors from '../../../utils/colors';
import test from '../../../utils/constants';

type Upload = {
  uri: string;
  onPress: () => void;
};

const addIcon = require('../../assets/images/add_photo.png');
const UploadPhoto: FC<Upload> = ({ uri, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.uploadImageContainer}>
      <Image style={styles.imageStyles} source={uri ? { uri } : addIcon} />
      <Text style={styles.textStyles}>Add photo</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  uploadImageContainer: {
    alignItems: 'center',
  },
  imageStyles: {
    width: 100,
    height: 100,
    marginVertical: 10,
    borderRadius: 40,
    backgroundColor: colors.blue_buzz,
  },
  textStyles: {
    fontSize: 18,
    color: colors.shock_blue,
  },
});

export default UploadPhoto;
