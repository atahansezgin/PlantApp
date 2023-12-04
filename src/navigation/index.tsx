import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAppSelector } from 'store';
import AppStack from './stacks/AppStack';
import AuthStack from './stacks/AuthStack';

export enum SCREEN {
  GetStartedScreen = "GetStartedScreen",
  OnboardingScreen = "OnboardingScreen",
  PaywallScreen = "PaywallScreen",
  HomeScreen = "HomeScreen",
  DiagnoseScreen = "DiagnoseScreen",
  MyGardenScreen = "MyGardenScreen",
  ProfileScreen = "ProfileScreen"
}

const Navigation = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn ?  <AppStack/> : <AuthStack/>}
    </NavigationContainer>
  );
};

export default Navigation;