import React from 'react'
import {StyleSheet,View,Text } from 'react-native'
const QuestionTargetsCard =({target})=>{
    return (<View style={styles.mainContainer}>
    <Text style={styles.text}> Ders Adı:{target.dersAdi}</Text>
    <Text style={styles.text}> Soru Sayısı: {target.hedefSoru}</Text>
    </View>);
};

const styles= StyleSheet.create({
    mainContainer:{
        backgroundColor: '#0066FF', padding:15, margin: 5, height:100, borderRadius:5,
    },
    text:{
        fontSize:20,
        color:'white',

    }
})
export default QuestionTargetsCard;