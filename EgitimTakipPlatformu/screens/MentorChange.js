import React from 'react'
import { Alert } from 'react-native';
import { SafeAreaView,View,Text,StyleSheet,TouchableOpacity } from 'react-native'
import CarouselCards from '../components/CarouselCard';
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
const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'stretch',
    },
    title: {
      color: 'black',
      fontSize: 25,
      paddingLeft: 24,
      paddingTop: 15,
      paddingBottom: 12,
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '85%',
      height: '8%',
      backgroundColor: 'blue',
      borderRadius: 8,
      margin: 20,
      marginTop: 30,
    },
  });
export default MentorChange;    