import React from 'react'
import { View,Text,StyleSheet,SafeAreaView, Animated, Easing } from 'react-native'
import styles from './SplashScreenStyle';

import LottieView from 'lottie-react-native';
const SplashScreen =({navigation})=>{
    setTimeout(() => {
        navigation.navigate('LoginScreen');
      }, 4000);
    return(<SafeAreaView style={styles.container}>

<LottieView style={{justifyContent:'center',alignItems:'center'}} source={require('../../assets/studies_student.json')} autoPlay loop />
    </SafeAreaView>
    );

};

export default SplashScreen;