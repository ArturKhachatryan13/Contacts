import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import buttonsize from '../Button/size';

const Button = ({ onPass, title, small }) => {
  return (
    <TouchableOpacity
      style={[buttonsize.buttonStyes, buttonsize[small]]}
      onPress={onPass}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
