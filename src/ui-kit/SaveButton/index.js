import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import buttonsize from '../SaveButton/size';

const SaveButton = ({ onPass, title, small }) => {
  return (
    <TouchableOpacity
      style={[buttonsize.buttonStyes, buttonsize[small]]}
      onPress={onPass}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default SaveButton;
