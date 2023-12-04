import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icons } from '../../../assets';
import Badge from '../../Badge';
import { styles } from './styles';

const FreePremiumCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.messageContainer}>
        <Image source={Icons.message_icon} style={styles.messageIcon} />
        <Badge value={1} style={styles.badge} />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.textPrimary}>
          <Text style={styles.textBold}>FREE</Text> Premium Available
        </Text>
        <Text style={styles.textSecondary}>
          Tap to upgrade your account!
        </Text>
      </View>
      <Image source={Icons.arrow_right_icon} style={styles.arrowRightIcon} />
    </TouchableOpacity>
  );
};

export default FreePremiumCard;