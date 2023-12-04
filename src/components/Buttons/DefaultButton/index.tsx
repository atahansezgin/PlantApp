import { Text, TextStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React, { FC } from 'react';
import { styles } from './styles';

type DefaultButtonProps = TouchableOpacityProps & {
  label: string;
  labelStyle?: TextStyle;
};
const DefaultButton: FC<DefaultButtonProps> = props => {
  return (
    <TouchableOpacity {...props} style={[styles.container, props.style]}>
      <Text style={[styles.label, props.labelStyle]}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;