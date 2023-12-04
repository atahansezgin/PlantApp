import React, { FC, PropsWithChildren } from 'react';
import { styles } from './styles';
import { ImageBackground } from 'react-native';
import { Images } from 'assets';
import { SafeAreaView } from 'react-native-safe-area-context';

const AuthBackground: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ImageBackground source={Images.Background} style={styles.container}>
      <SafeAreaView style={styles.container}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AuthBackground;