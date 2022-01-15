import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../assets/Students-2.png')}
          style={{width: '90%', resizeMode: 'contain'}}></Image>
      </View>
      <View style={{flex: 4, padding: 10}}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            color: '#1E2944',
            marginTop: 30,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          Kaydol
        </Text>
        <TextInput
          placeholder="Ad Soyad"
          style={{
            borderBottomWidth: 1,
            borderColor: '#999dec',
            marginVertical: 15,
            width: '100%',
          }}></TextInput>
        <TextInput
          placeholder="E-mail"
          style={{
            borderBottomWidth: 1,
            borderColor: '#999dec',
            marginVertical: 15,
            width: '100%',
          }}></TextInput>
        <TextInput
          placeholder="Parola"
          style={{
            borderBottomWidth: 1,
            borderColor: '#999dec',
            marginVertical: 15,
            width: '100%',
          }}></TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Ana Sayfa');
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
            Kaydol
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{color: '#7174d0'}}>Zaten Üye Misin ? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}>
            <Text style={{color: '#0124fb'}}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    height: '12%',
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 20,
    marginTop: 30,
  },
});

export default SignUp;
