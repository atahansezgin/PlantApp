import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Icons } from 'assets';
import { responsiveHeight } from 'constants/Dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MainTabBar: FC<BottomTabBarProps> = props => {

  const { state, descriptors, navigation } = props;
  const { bottom } = useSafeAreaInsets();

  const iconSource: any = {
    "Home": Icons.home_icon,
    "Diagnose": Icons.diagnose_icon,
    "My Garden": Icons.garden_icon,
    "Profile": Icons.profile_icon
  };

  return (
    <View style={{ flexDirection: 'row', paddingTop: responsiveHeight(6), paddingBottom: responsiveHeight(6) + bottom }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        if (label === "action") {
          return (
            <TouchableOpacity
              key={"action"}
              style={{
                backgroundColor: Colors.primaryGreen,
                borderRadius: 100,
                borderWidth: 4,
                borderColor: "#FFFFFF3D",
                width: responsiveHeight(64),
                height: responsiveHeight(64),
                marginTop: -responsiveHeight(32),
                alignItems: "center",
                justifyContent: "center"
              }}>
              <Image source={Icons.scan_icon} style={{ height: responsiveHeight(25), width: responsiveHeight(25) }} />
            </TouchableOpacity>
          );
        }
        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            <Image
              source={iconSource[label!]}
              style={{ tintColor: isFocused ? Colors.primaryGreen : Colors.textGray, height: responsiveHeight(25), width: responsiveHeight(25) }}
            />
            <Text
              style={{ color: isFocused ? Colors.primaryGreen : Colors.textGray, marginTop: responsiveHeight(4.87), fontSize: 10, lineHeight: 11.85, letterSpacing: -0.24 }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};


export default MainTabBar;