import React, { useMemo, FC } from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

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
  style: any;
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
      <Text style={[textStyles.textstyle, textStyles[size]]}>
        {userInitials}
      </Text>
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
const textStyles = StyleSheet.create({
  textstyle: {
    ineHeight: 24,
    color: Colors.white,
  },
  [AvatarSize.small]: { fontSize: 14 },
  [AvatarSize.medium]: { fontSize: 16 },
});

export default Avatar;
