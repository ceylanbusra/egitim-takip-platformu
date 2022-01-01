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

const Profile = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <View
            style={styles.HsecondContainer}>
            <Image
              style={styles.Image}
              source={require('../assets/danisman.png')}></Image>

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
const styles = StyleSheet.create({
  headerContainer: {
    flex: 3,
    backgroundColor: '#9575cd',
  },
  bodyContainer: {
    flex: 5,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
  },
  Image:{
    width: 100, resizeMode: 'contain'
  },
  HsecondContainer:{
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
  },
  scrollView: {
    backgroundColor: '#e0e0e0',
  },
  text: {
    fontSize: 22,
    color:'black',
    opacity:0.7
  },
  text2: {
    fontSize: 24,
    color:'white',
    
  },
  Container: {
    width: '90%',
    height: 60,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 8,
    justifyContent: 'center',
  },
  Button:{
    width: '90%',
    height: 60,
    backgroundColor: '#0066FF',
    marginVertical: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems:'center'
  }
});

