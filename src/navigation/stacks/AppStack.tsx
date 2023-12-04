import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'screens/HomeScreen';
import DiagnoseScreen from 'screens/DiagnoseScreen';
import MyGardenScreen from 'screens/MyGardenScreen';
import ProfileScreen from 'screens/ProfileScreen';
import MainTabBar from 'components/Tabs/MainTabBar';
import { View } from 'react-native';
import { SCREEN } from 'navigation';

const EmptyAction = () => <View></View>;

const AppStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBar={props => <MainTabBar {...props} />}
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name={SCREEN.HomeScreen}
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      />
      <Tab.Screen
        name={SCREEN.DiagnoseScreen}
        component={DiagnoseScreen}
        options={{
          title: "Diagnose",
        }}
      />
      <Tab.Screen
        name='action'
        component={EmptyAction}
        options={{
          title: "action",
        }}
      />
      <Tab.Screen
        name={SCREEN.MyGardenScreen}
        component={MyGardenScreen}
        options={{
          title: "My Garden",
        }}
      />
      <Tab.Screen
        name={SCREEN.ProfileScreen}
        component={ProfileScreen}
        options={{
          title: "Profile",
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;