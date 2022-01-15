import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './MentorStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Mentor = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <View style={styles.HsecondContainer}>
            <Image
              style={styles.Image}
              source={require('../../assets/danisman.png')}></Image>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.Container}>
            <Text style={styles.text}>Ayşe Merve</Text>
          </View>
          <View style={styles.Container}>
            <Text style={styles.text}>Acılar</Text>
          </View>

          <View style={styles.Container}>
            <Text style={styles.text}>Bilgisayar Mühendisi</Text>
          </View>
          <View style={styles.Container}>
            <Text style={styles.text}>Antalya</Text>
          </View>
          <View style={styles.Container}>
            <Text style={styles.text}>05419392849</Text>
          </View>
          <View style={styles.Button}>
            <TouchableOpacity  onPress={() => {
            navigation.navigate('MentorChange');
          }}>
          
              <Text style={styles.text2}>Değiştir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Mentor;

