import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import styles from './ChronometerStyle';
const screen = Dimensions.get('window');
const formatNumber = number =>`0, ${number}`.slice(-2);

const getRemainig = time => {
  const mins = Math.floor(time / 60);
  const secs = time - mins * 60;
  return {mins: formatNumber(mins), secs: formatNumber(secs)};
};
const Chronometer = () => {
  const [reaminingSecs, setReaminingSecs] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const {mins, secs} = getRemainig(reaminingSecs);

  const toogle = () => {
    setIsActive(!isActive);
  };
  const reset = () => {
    setReaminingSecs(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setReaminingSecs(reaminingSecs => reaminingSecs + 1);
      }, 1000);
    } else if (!isActive && reaminingSecs !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, reaminingSecs]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light-content" />
      <Text style={styles.timerText}> {mins+':'+secs}</Text>
      <TouchableOpacity onPress={toogle} style={styles.button}>
        <Text style={styles.buttonText}> {isActive ? 'Duraklat' : 'Başlat'} </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={reset}
        style={[styles.button, styles.buttonReset]}>
        <Text style={[styles.buttonText, styles.buttonTextReset]}> Sıfırla</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Chronometer;

