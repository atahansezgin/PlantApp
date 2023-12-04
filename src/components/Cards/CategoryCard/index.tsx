import { View, Text, Image } from 'react-native';
import React, { FC } from 'react';
import { Category } from 'types';
import { styles } from './styles';

type CategoryCardProps = {
  item: Category;
};

const CategoryCard: FC<CategoryCardProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{item.title}</Text>
      <Image style={styles.image} source={{ uri: item.image.url }} />
    </View>
  );
};

export default CategoryCard;