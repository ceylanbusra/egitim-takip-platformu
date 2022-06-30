import React from 'react'
import {StyleSheet,View,Text } from 'react-native'
const AllStudentsCard =({target})=>{
    return (<View style={styles.mainContainer}>
    <Text style={styles.text}> Öğrenci Adı: {target.OgrenciAdi}</Text>
    <Text style={styles.text}> Öğrenci Numarası: {target.Numarası}</Text>
    <Text style={styles.text}> Bölümü: {target.Bölümü}</Text>
    </View>);
};

const styles= StyleSheet.create({
    mainContainer:{
        backgroundColor: '#7F5DF0', padding:15, margin: 5, height:100, borderRadius:5,
    },
    text:{
        fontSize:20,
        color:'white',

    }
})
export default AllStudentsCard;