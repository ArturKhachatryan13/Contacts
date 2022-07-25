import React from 'react';

import { TouchableOpacity } from 'react-native';

import Add from '../../assets/images/Add.svg';

const AddHeaderButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Add width={25} />
    </TouchableOpacity>
  );
};

export default AddHeaderButton;
