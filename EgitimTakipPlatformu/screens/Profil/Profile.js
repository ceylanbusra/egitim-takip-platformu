import React, { useContext } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../../context/auth';
import styles from './ProfileStyle';

const Profile = () => {

const {user}= useContext(AuthContext);

console.log("name"+ user.displayName);
console.log("------------");
console.log(user);
console.log("------------");
console.log("name"+ user.name);
console.log("------------");
console.log("userın kendisi", user);

  return (
   
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <View
            style={styles.HsecondContainer}>
            <Image
              style={styles.Image}
              source={require('../../assets/danisman.png')}></Image>

         
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.Container}>
            <Text style={styles.text}> Büşra</Text>
          </View>
          <View style={styles.Container}>
            <Text style={styles.text}>{user.Name}</Text>
          </View>
         
          <View style={styles.Container}>
            <Text style={styles.text}>{user.Bday}</Text>
          </View>
          <View style={styles.Container}>
            <Text style={styles.text}>{user.Country}</Text>
          </View>
          <View style={styles.Container}>
            <Text style={styles.text}>05419392849</Text>
          </View>
          
         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Profile;


