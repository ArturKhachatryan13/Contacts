import React, { FC } from 'react';

import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

import colors from '../../../utils/colors';

type Upload = {
  uri: string;
  onPress: () => void;
};

const UploadPhoto: FC<Upload> = ({ uri, onPress }) => {
  const initialIconPath =
    'file:///Users/arturkhachatryan/Downloads/add-photo.png';
  return (
    <TouchableOpacity onPress={onPress} style={styles.uploadImageContainer}>
      <Image
        style={styles.imageStyles}
        source={{
          uri: uri ? uri : initialIconPath,
        }}
      />
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
