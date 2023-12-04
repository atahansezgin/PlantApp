import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { styles } from './styles';

type RadioButtonProps = {
  selected: boolean;
};

const RadioButton: FC<RadioButtonProps> = ({ selected }) => {
  return (
    <View style={selected ? styles.selected : styles.unSelected}/>
  );
};

export default RadioButton;