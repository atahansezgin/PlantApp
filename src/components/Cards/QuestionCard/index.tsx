import { View, Text, Image } from 'react-native';
import React, { FC } from 'react';
import { styles } from './styles';
import { Question } from '../../../types';

type QuestionCardProps = {
  item: Question;
};

const QuestionCard: FC<QuestionCardProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image_uri }} style={styles.image} />
      <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
    </View>
  );
};

export default QuestionCard;