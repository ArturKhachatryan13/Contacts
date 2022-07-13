import React, { useMemo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import textStyle from './textSize';
import containerSize from './containerSize';
import Colors from '../../../utils/colors';

const Avatar = ({ image, name, surname, size, style }) => {
  const userInitials = useMemo(() => {
    return `${name[0]}${surname?.[0] || ''}`;
  }, [name, surname]);

  return image ? (
    <Image
      style={[styles.image, styles[size], style]}
      source={{
        uri: image,
      }}
    />
  ) : (
    <View style={[containerSize.contactContainerStyles, containerSize[size]]}>
      <Text style={[textStyle.textstyle, textStyle[size]]}>{userInitials}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    backgroundColor: Colors.edgewater,
  },
  small: {
    borderRadius: 12,
    height: 53,
    width: 53,
  },
  medium: {
    width: 103,
    height: 103,
    borderRadius: 24,
  },
});

export default Avatar;
