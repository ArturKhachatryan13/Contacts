import React, { FC } from 'react';

import { Text, TouchableOpacity } from 'react-native';

import buttonSize from './size';

export enum ButtonSizeVariant {
  small = 'small',
}

interface ButtonProps {
  title: string;
  small: ButtonSizeVariant.small;
  onPass: () => void;
  uri: string;
}

const Button: FC<ButtonProps> = ({ onPass, title, small }) => {
  return (
    <TouchableOpacity
      style={[buttonSize.buttonStyes, buttonSize[small]]}
      onPress={onPass}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
