import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import styles from './SignUpStyle';
import {ErrorMessage, Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../../context/auth';
import {__values} from 'tslib';
import * as yup from 'yup';

const SignUp = ({navigation}) => {
  const {signUp} = useContext(AuthContext);
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required('Boş bırakılamaz..')
      .email('Geçerli bir email adresi giriniz!'),
    password: yup
      .string()
      .required('Boş geçilemez')
      .min(6, ({min}) => 'şifre en az ' + min + ' karakter olmalıdır')
      .matches(/\w*[a-z]\w*/, 'En az 1 adet küçük harf kullanmalısınız!')
      .matches(/\w*[A-Z]\w*/, 'En az 1 adet büyük harf kullanmalısınız!')
      .matches(/\d/, 'En az 1 adet rakam kullanmalısınız!')
      .matches(
        /[!#$%^$+&*()\-_"=+{}; :,<.>]/,
        'En az 1 özel karakter kullanmalısınız!',
      ),
  });


  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.photograph}>
          {
            <Image
              style={{width: 100, height: 100}}
              source={require('../../assets/ebook.png')}
            />
          }
        </View>
        <View style={styles.content}>
          <Text style={styles.girisYapText}>Kaydol</Text>
          <Formik
            validationSchema={validationSchema}
            initialValues={{email: '', password: '',name:'',phone:''}}
            onSubmit={values =>
              signUp(
              
                values.email,
                values.password,
                values.name,
                values.phone,
                navigation.navigate('Ana Sayfa'),
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
                        value={values.name}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                      // style={styles.textInput}
                      placeholder="Ad- Soyad" 
                      
                      ></TextInput>
                  </TouchableOpacity>
                  {errors.name && (
                    <Text style={{color: '#f00', fontSize: 14}}>
                      {' '}
                      {errors.name}
                    </Text>
                  )}
                  <TouchableOpacity
                    style={[
                      styles.touchableOpacity,
                      {
                        marginBottom: 10,
                        marginTop: 10,
                      },
                    ]}>
                    <TextInput
                        value={values.phone}
                        onChangeText={handleChange('phone')}
                        onBlur={handleBlur('phone')}
                        keyboardType={'numeric'}
                      // style={styles.textInput}
                      placeholder="Telefon numarası"></TextInput>
                  </TouchableOpacity>
                  {errors.phone && (
                    <Text style={{color: '#f00', fontSize: 14}}>
                      {' '}
                      {errors.phone}
                    </Text>
                  )}
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
                      {errors.password}
                    </Text>
                  )}
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
                    Kaydol
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
