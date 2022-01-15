import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './ProfileStyle';

const Profile = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <View
            style={styles.HsecondContainer}>
            <Image
              style={styles.Image}
              source={require('../../assets/danisman.png')}></Image>

            <MaterialCommunityIcons
              style={{paddingTop: 20}}
              name="plus-circle"
              color={'#0066FF'}
              size={28}
              style={{position: 'absolute'}}
            />
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.Container}>
            <Text style={styles.text}>Döndü Büşra</Text>
          </View>
          <View style={styles.Container}>
            <Text style={styles.text}>Ceylan</Text>
          </View>
         
          <View style={styles.Container}>
            <Text style={styles.text}>19.05.1999</Text>
          </View>
          <View style={styles.Container}>
            <Text style={styles.text}>Antalya</Text>
          </View>
          <View style={styles.Container}>
            <Text style={styles.text}>05419392849</Text>
          </View>
          <View style={styles.Button}>
          <Text style={styles.text2}>Düzenle</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Profile;


