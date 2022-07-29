import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import buttonSize from '../Button/size';

const Button = ({ onPass, title, small }) => {
  return (
    <TouchableOpacity
      style={[buttonSize.buttonStyes, buttonSize[small]]}
      onPress={onPass}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
