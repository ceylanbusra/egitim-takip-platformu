import React, {useState, useContext,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './LoginStyle';
import {ErrorMessage, Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../../context/auth';
import {__values} from 'tslib';
import * as yup from 'yup';


const LoginScreen = ({navigation}) => {
  const {login} = useContext(AuthContext);
  const {user,setUser} =useContext(AuthContext);

  function onAuthStateChanged(user) {
    setUser(user);
  }
  useEffect(()=>{
  const subscriber =auth().onAuthStateChanged(onAuthStateChanged);
  return subscriber;
  },[]);






  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required('Boş bırakılamaz..')
      .email('Geçerli bir email adresi giriniz!'),
    password: yup
      .string()
      .required('Boş geçilemez')
      .min(6, ({min}) => 'şifre en az ' + min + ' karakter olmalıdır'),
  });

  function sifreKontrol(email, password) {
    if ((password && email) != null) {
      if (password.length <= 10 && password.length >= 6) {
        if (password.substring(0, 1) === 'B') {
          navigation.navigate('Ana Sayfa');
        } else {
          Alert.alert(
            'şifrenin ilk harfi büyük olmak zorundadır, lütfen tekrar deneyiniz...',
          );
          console.log(
            'şifrenin ilk harfi büyük olmak zorundadır, lütfen tekrar deneyiniz...',
          );
        }
      } else {
        Alert.alert(
          'giriş başarısız şifre uzunluğu 10dan küçük veya 6 dan büyük olmak zorundadır.',
        );
        console.log(
          'giriş başarısız şifre uzunluğu 10dan küçük veya 6 dan büyük olmak zorundadır.',
        );
      }
    } else {
      console.log('parola ya da şifre alanı boş lütfen kontrol ediniz...');
    }
  }

  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(sifreKontrol(email, password))
      .catch(err => console.log(err));
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.photograph}>
        {
          <Image
            style={{width: 100, height: 100}}
            source={require('../../assets/ebook.png')}
          />
        }
      </View>
      <View style={styles.content}>
        <Text style={styles.girisYapText}>Giriş Yap</Text>
        <Formik
          validationSchema={validationSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={values =>
            login(
              values.email,
              values.password,
            
              console.log("cl login page user id", user.id),
            navigation.navigate('Ana Sayfa'),
             //navigation.navigate('teacherMain'),
            )
          }>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={[
                    styles.touchableOpacity,
                    {
                      marginBottom: 10,
                      marginTop: 10,
                    },
                  ]}>
                  <TextInput
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    // style={styles.textInput}
                    placeholder=" E-mail "></TextInput>
                </TouchableOpacity>
                {errors.email && (
                  <Text style={{color: '#f00', fontSize: 14}}>
                    {' '}
                    {errors.email}
                  </Text>
                )}
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity style={styles.touchableOpacity}>
                  <TextInput
                    capitalize="none"
                    correct={false}
                    secureTextEntry={true}
                    // style={styles.textInput}
                    placeholder="Parola "
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}></TextInput>
                </TouchableOpacity>
                {errors.email && (
                  <Text style={{color: '#f00', fontSize: 14}}>
                    {' '}
                    {errors.email}
                  </Text>
                )}
              </View>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
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
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
