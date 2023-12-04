import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { responsiveHeight } from 'constants/Dimensions';

type PagerStepsProps = {
  totalPage: number;
  currentPage: number;
};

const PagerSteps: FC<PagerStepsProps> = ({ totalPage, currentPage }) => {
  return (
    <View style={styles.container}>
      {new Array(totalPage).fill("").map((point, index) => (
        <View key={`@pagerSteps_${index}`} style={index === currentPage ? styles.active : styles.inactive} />
      ))}
    </View>
  );
};

export default PagerSteps;

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
  },

  active: {
    backgroundColor: "#13231B",
    width: 10,
    height: 10,
    borderRadius: 100,
    marginHorizontal:4
  },
  inactive: {
    backgroundColor: "#13231B40",
    width: 6,
    height: 6,
    borderRadius: 100,
    marginHorizontal:4
  }
});