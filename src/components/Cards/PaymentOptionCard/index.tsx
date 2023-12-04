import { View, Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { styles } from './styles';
import RadioButton from '../../RadioButton';
import { PaymentOption } from '../../../types';
import LinearGradient from 'react-native-linear-gradient';

type PaymentOptionCardProps = {
  item: PaymentOption;
  onSelect: (value: string) => void;
  selected: boolean;
};

const PaymentOptionCard: FC<PaymentOptionCardProps> = ({ item, selected, onSelect }) => {
  const hasDiscount = !!item.discount && item.discount > 0;
  const onPress = () => {
    onSelect(item.package);
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <RadioButton selected={selected} />
      <View style={styles.labelContainer}>
        <Text style={styles.package}>
          {item.package}
        </Text>
        <Text style={styles.description}>
          {item.description}
        </Text>
      </View>
      {
        (hasDiscount) &&
        <View style={styles.discountContainer}>
          <Text style={styles.discountText}>Save {item.discount}%</Text>
        </View>
      }
    </TouchableOpacity>
  );
};

export default PaymentOptionCard;