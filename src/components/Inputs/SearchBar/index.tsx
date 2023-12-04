import { View, Text, Image, TextInput, TextInputProps, ViewStyle } from 'react-native';
import React, { FC } from 'react';
import { Icons } from '../../../assets';
import { styles } from './styles';

type SearchBarProps = TextInputProps & {
  style?: ViewStyle;
};

const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <Image style={styles.icon} source={Icons.search_icon} />
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor={"#AFAFAF"}
      />
    </View>
  );
};

export default SearchBar;