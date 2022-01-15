import React, {useState} from 'react';
import {
  SafeAreaView,
 
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';
import styles from './LoginStyle';


const LoginScreen = ({navigation}) => {
  const [eMail, setEmail] = useState();
  const [parola, setParola] = useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.photograph}>
      <LottieView style={styles.photo} source={require('../../assets/happy-students1.json')} autoPlay loop />

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
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <MaterialCommunityIcons style={{paddingTop:20}} name="at"  color={'#0066FF'}  size={28} />
        
        <TextInput
          value={eMail}
          onChangeText={value => setEmail(value)}
          style={styles.textInput}
          placeholder=" E-mail "></TextInput>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <MaterialCommunityIcons name="lock" style={{paddingTop:20}} color={'#0066FF'} size={28} />
 
        <TextInput style={styles.textInput} placeholder="Parola "></TextInput>
        </View>
        
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}
          style={{alignItems: 'flex-end'}}>
          <Text style={{color: '#0066FF', elevation: 5, opacity: 0.8}}>
            Parolamı unuttum
          </Text>
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



export default LoginScreen;
