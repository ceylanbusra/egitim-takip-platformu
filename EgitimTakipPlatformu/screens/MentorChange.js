import React from 'react'
import { SafeAreaView,View,Text,StyleSheet } from 'react-native'
import CarouselCards from '../components/CarouselCard';
const MentorChange =()=>{
    return(
        <SafeAreaView style={styles.container}>
        <Text style={styles.title}>DANIŞMANLAR</Text>
        <CarouselCards />
      </SafeAreaView>
    );
 
}
const styles = StyleSheet.create({
    container: {
      alignItems: 'stretch',
    },
    title: {
      color: 'black',
      fontSize: 11,
      paddingLeft: 24,
      paddingTop: 15,
      paddingBottom: 12,
    },
  });
export default MentorChange;    