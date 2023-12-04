import { Image, Text, View } from 'react-native';
import React from 'react';
import AuthBackground from 'components/Backgrounds/AuthBackground';
import DefaultButton from 'components/Buttons/DefaultButton';
import { Images } from 'assets';
import { SCREEN_WIDTH, responsiveHeight } from 'constants/Dimensions';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { SCREEN } from 'navigation';

const GetStartedScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <AuthBackground>
      <View style={styles.header}>
        <Text style={styles.textPrimary}>Welcome to <Text style={{ fontWeight: "600" }}>Plant App</Text></Text>
        <Text style={styles.textSecondary}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>
      </View>
      <View style={styles.content}>
        <Image source={Images.GetStartedImage} style={{ width: SCREEN_WIDTH, height: responsiveHeight(499) }} />
      </View>
      <View style={styles.footer}>
        <DefaultButton label='Get Started' onPress={() => navigation.navigate(SCREEN.OnboardingScreen)} />
        <Text style={styles.privacyText}>
          By tapping next, you are agreeing to PlantID
          Terms of Use & Privacy Policy.
        </Text>
      </View>
    </AuthBackground>
  );
};

export default GetStartedScreen;