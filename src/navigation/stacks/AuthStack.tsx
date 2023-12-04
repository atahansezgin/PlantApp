import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStartedScreen from 'screens/GetStartedScreen';
import OnboardingScreen from 'screens/OnboardingScreen';
import PaywallScreen from 'screens/PaywallScreen';
import { SCREEN } from 'navigation';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name={SCREEN.GetStartedScreen} component={GetStartedScreen} />
      <Stack.Screen name={SCREEN.OnboardingScreen} component={OnboardingScreen} />
      <Stack.Screen name={SCREEN.PaywallScreen} component={PaywallScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;