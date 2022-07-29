import React, { useMemo, FC } from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

import textStyle from './textSize';
import Colors from '../../../utils/colors';

export enum AvatarSize {
  small,
  medium,
}

interface IAvatar {
  image: string;
  name: string;
  surname: string;
  size: AvatarSize;
  style: string;
}

const Avatar: FC<IAvatar> = ({ image, name, surname, size, style }) => {
  const userInitials = useMemo(() => {
    return `${name[0]}${surname.length ? surname[0] : ''}`;
  }, [name]);
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
  [AvatarSize.small]: {
    borderRadius: 12,
    height: 53,
    width: 53,
  },
  [AvatarSize.medium]: {
    width: 103,
    height: 103,
    borderRadius: 24,
  },
});

const containerSize = StyleSheet.create({
  contactContainerStyles: {
    backgroundColor: '#1B2124',
    justifyContent: 'center',
    alignItems: 'center',
  },
  [AvatarSize.small]: {
    width: 53,
    height: 53,
    borderRadius: 16,
  },
  [AvatarSize.medium]: {
    width: 103,
    height: 103,
    borderRadius: 24,
  },
});

export default Avatar;
