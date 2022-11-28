import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomIcon = ({name, size = 30, color = '#000'}) => {
  return <Icon name={name} size={size} color={color} />;
};

export default CustomIcon;
