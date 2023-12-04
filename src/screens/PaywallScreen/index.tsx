import { View, Text, ImageBackground, FlatList, ListRenderItem } from 'react-native';
import React, { useState } from 'react';
import { Icons, Images } from 'assets';
import FeatureCard from 'components/Cards/FeatureCard';
import { Feature, PaymentOption } from 'types';
import { styles } from './styles';
import DefaultButton from 'components/Buttons/DefaultButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import PaymentOptionCard from 'components/Cards/PaymentOptionCard';
import { useAppDispatch } from 'store';
import { login } from 'store/reducers/authReducer';

const PaywallScreen = () => {
  const dispatch = useAppDispatch()
  const [selectedPackage,setSelectedPackage] = useState("1 Year")
  const features: Feature[] = [
    {
      name: "Unlimited",
      description: "Plant identify",
      icon: Icons.scan_icon
    },
    {
      name: "Faster",
      description: "Process",
      icon: Icons.speedometer_icon
    },
    {
      name: "Limited",
      description: "Plant identify",
      icon: Icons.scan_icon
    },
  ];

  const paymentOptions: PaymentOption[] = [
    {
      package: "1 Month",
      description: "$2.99/month, auto renewable",
      discount: 0
    },
    {
      package: "1 Year",
      description: "First 3 days free, then $529,99/year",
      discount: 50
    },
  ];

  const renderFeature: ListRenderItem<Feature> = ({ item }) => <FeatureCard name={item.name} description={item.description} icon={item.icon} onPress={() => { }} />;
  const onPress = () => dispatch(login())
  return (
    <ImageBackground source={Images.PaywallBackground} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          <Text style={styles.titleBold}>PlantApp</Text> Premium
        </Text>
        <Text style={styles.subtitle}>Access All Features</Text>
      </View>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featureList}
          horizontal
          data={features}
          renderItem={renderFeature}
        />
      </View>
      <View style={styles.paymentOptionsContainer}>
        {paymentOptions.map(item => {
          return (
            <PaymentOptionCard onSelect={setSelectedPackage} key={item.package} item={item} selected={item.package === selectedPackage} />
          );
        })}
      </View>
      <SafeAreaView edges={["bottom"]} style={styles.footer}>
        <DefaultButton onPress={onPress} label={'Try free for 3 days'} />
        <Text style={styles.footerDescription}>
          After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable
        </Text>
        <Text style={styles.footerDescriptionSecondary}>
          Terms  •  Privacy  •  Restore
        </Text>
      </SafeAreaView>

    </ImageBackground>
  );
};

export default PaywallScreen;