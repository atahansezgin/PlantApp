import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { styles } from './styles';

type FeatureCardProps = {
  name: string;
  description: string;
  icon: any;
  onPress: () => void;
};

const FeatureCard: FC<FeatureCardProps> = ({ name, description, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={icon} />
      </View>
      <View>
        <Text style={styles.name}>
          {name}
        </Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FeatureCard;