import React from 'react';
import {TouchableOpacity} from 'react-native';

const ButtonIcon = props => {
  const {children, onPress, customStyle} = props;
  return (
    <TouchableOpacity style={customStyle} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default ButtonIcon;
