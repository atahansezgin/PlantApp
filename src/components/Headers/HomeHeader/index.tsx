import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import SearchBar from '../../Inputs/SearchBar';
import { Images } from '../../../assets';
import { styles } from './styles';

const HomeHeader = () => {
  return (
    <ImageBackground style={styles.container} source={Images.HomeHeaderBackground}>
      <Text style={styles.primaryTitle}>
        Hi, plant lover!
      </Text>
      <Text style={styles.secondaryTitle}>
        Good Afternoon! ⛅
      </Text>
      <SearchBar placeholder='Search for plants' />
    </ImageBackground>
  );
};

export default HomeHeader;