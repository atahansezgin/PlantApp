import { View, Text, Image } from 'react-native';
import React, { useRef, useState } from 'react';
import { Images } from 'assets';
import PagerView from 'react-native-pager-view';
import { SCREEN_WIDTH, responsiveHeight, responsiveWidth } from 'constants/Dimensions';
import DefaultButton from 'components/Buttons/DefaultButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { SCREEN } from 'navigation';
import PagerSteps from 'components/PagerSteps';

const OnboardingScreen = () => {
  const PagerViewRef = useRef<PagerView>(null)
  const navigation = useNavigation<any>();

  const [currentPage, setCurrentPage] = useState(0);


  const onPress = () => {
    if(currentPage === 0){
      PagerViewRef.current?.setPage(1)
    }else{
      navigation.navigate(SCREEN.PaywallScreen);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, padding: responsiveHeight(24) }}>
      <PagerView
        ref={PagerViewRef}
        style={{ flex: 1 }}
        initialPage={currentPage}
        orientation={"horizontal"}
        onPageSelected={e => setCurrentPage(e.nativeEvent.position)}
      >
        <View key={"one"}>
          <Image resizeMode='contain' style={{ height: responsiveWidth(66), width: responsiveWidth(303) }} source={Images.OnboardingOneTitle} />
          <Image source={Images.OnboardingOne} style={{ width: SCREEN_WIDTH - responsiveHeight(48), height: responsiveHeight(630) }} />
        </View>
        <View key={"two"}>
          <Image style={{ height: responsiveWidth(49), width: responsiveWidth(277) }} source={Images.OnboardingThreeTitle} />
          <Image source={Images.OnboardingOne} style={{ width: SCREEN_WIDTH - responsiveHeight(48), height: responsiveHeight(630) }} />
        </View>

      </PagerView>
      <DefaultButton onPress={onPress} label='Continue' style={{ marginBottom: responsiveHeight(32) }} />
      <PagerSteps totalPage={2} currentPage={currentPage} />
    </SafeAreaView>

  );
};

export default OnboardingScreen;