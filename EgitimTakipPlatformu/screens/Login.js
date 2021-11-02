import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [eMail, setEmail] = useState();
  const [parola, setParola] = useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.photograph}>
        <Image
          source={require('../assets/Happy_Students.png')}
          style={styles.photo}></Image>
      </View>

      <View style={styles.content}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            color: '#1E2944',
            marginTop: 30,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          Giriş Yap
        </Text>
        <TextInput
          value={eMail}
          onChangeText={value => setEmail(value)}
          style={styles.textInput}
          placeholder="@ E-mail "></TextInput>
        <TextInput style={styles.textInput} placeholder="Parola "></TextInput>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}
          style={{alignItems: 'flex-end'}}>
          <Text style={{color: '#0124fb'}}>Parolamı unuttum</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Ana Sayfa');
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
            Giriş Yap
          </Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{color: '#7174d0'}}>Üye değil misin? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text style={{color: '#0124fb'}}>Üye Ol</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FBFCFD',
    padding: 10,
  },
  photograph: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  photo: {
    width: '100%',
    resizeMode: 'contain',
  },
  content: {
    flex: 3,
    padding: 10,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: '#999dec',
    marginVertical: 15,
    width: '100%',
  },
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

export default LoginScreen;
