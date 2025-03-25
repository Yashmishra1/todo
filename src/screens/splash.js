import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import resetAndNavigate from '../utils/Helpers';
import { screenHeight, screenWidth } from '../utils/Constants';
const Splash = () => {
  const navigation = useNavigation();
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    if (!hasNavigated) {
      const timeOutId = setTimeout(() => {
        resetAndNavigate(navigation, 'home');
        return () => clearTimeout(timeOutId);
      }, 1000);
    }
  }, [hasNavigated]);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/splash.png')}
        styles={styles.image}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: screenWidth * 0.3,
    height: screenHeight * 0.2,
  },
});
export default Splash;
