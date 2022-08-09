import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Chat from '../../assets/images/Chat.svg';
import Call from '../../assets/images/Call.svg';
import Video from '../../assets/images/Video.svg';
import Message from '../../assets/images/Message.svg';
import colors from '../../../utils/colors';

type ProfileButton = {
  path: string;
  color: string;
  stroke?: string;
  fill?: string;
  onPress: () => void;
};

const iconList = {
  Chat,
  Call,
  Video,
  Message,
};

const ProfileButton: FC<ProfileButton> = ({
  onPress,
  path,
  color,
  stroke,
  fill,
}) => {
  const TagName = iconList[path];
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, styles[color]]}>
      <TagName stroke={stroke} fill={fill} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
  },
  green: {
    backgroundColor: colors.caribbean_Green,
  },
  blue: {
    backgroundColor: colors.dodger_blue,
  },
  red: {
    backgroundColor: colors.bittersweet,
  },
  grey: {
    backgroundColor: colors.solitude,
  },
});

export default ProfileButton;
