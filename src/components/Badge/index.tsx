import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import React, { FC } from 'react';
import { responsiveHeight } from 'constants/Dimensions';

type BadgeProps = {
  value: number;
  style?:ViewStyle
};

const Badge: FC<BadgeProps> = ({value,style}) => {
  return (
    <View style={[styles.container,style]}>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    backgroundColor: "#E82C13E5",
    width: responsiveHeight(15),
    height: responsiveHeight(15),
    alignItems: "center",
    justifyContent: "center"
  },
  value: {
    color: "#fff",
    fontSize: 10,
  }
});