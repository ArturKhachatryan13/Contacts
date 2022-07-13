import React, { useMemo } from 'react';
import { View, Text, Image } from 'react-native';
import textStyle from './textSize';
import sizeStyles from './size';
import containerSize from './containerSize';

const Avatar = ({ image, name, surname, size }) => {
  const userInitials = useMemo(() => {
    return `${name[0]}${surname[0] || ''}`;
  }, [name, surname]);

  return image ? (
    <Image
      style={sizeStyles[size]}
      source={{
        uri: image,
      }}
    />
  ) : (
    <View style={containerSize[size]}>
      <Text style={textStyle[size]}>{userInitials}</Text>
    </View>
  );
};

export default Avatar;
