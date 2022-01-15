import React from 'react'
import { Alert } from 'react-native';
import { SafeAreaView,View,Text,StyleSheet,TouchableOpacity } from 'react-native'
import CarouselCards from '../../components/CarouselCard';
import styles from './MentorChangeStyle';
const MentorChange =(prop)=>{
    return(
        <SafeAreaView style={styles.container}>
        <Text style={styles.title}>DANIŞMANLAR</Text>
        <CarouselCards />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Alert.alert(prop.id);
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
            Değiştir
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
 
}

export default MentorChange;    