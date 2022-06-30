import React, {useState,useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  createStackNavigator,
} from '@react-navigation/native-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';



//Sayfa importları

//import LoginScreen from '../screens/Login';
//import MainPage from '../screens/QuestionTargets/MainPage';
import SignUp from '../screens/SignUp/SignUp';
//import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
//import LessonsVideos from '../screens/LessonVideos/LessonVideos';
//import Chronometer from '../screens/Chronometer';
import MainPage from '../screens/MainPage/MainPage';
import LoginScreen from '../screens/login/Login';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import Chronometer from '../screens/Chronometer/Chronometer';
//mport Graph from '../screens/Graph/Graph';
import Graph from '../screens/Graph/Graph';
import LessonVideos from '../screens/LessonVideos/LessonVideos';
import Mentor from '../screens/Mentor/Mentor';
import QuestionTargets from '../screens/QuestionTargets/QuestionTargets';
import Profile from '../screens/Profil/Profile';
import Videos from '../screens/Videos/videos';
import teacherMain from '../screens/teacherMain/teacherMain';
import allStudents from '../screens/allStudents/allStudents';
//import SplashScreen from '../screens/SplashScreen/SplashScreen';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import MentorChange from '../screens/MentorChange/MentorChange';
import { AuthContext, AuthContextProvider } from '../context';


//obje oluşturma
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const  Router= () =>{
 




  return (
    //Stack screen
    <AuthContextProvider>
    <NavigationContainer options={{headerShown: false}}>
  
      
          <Stack.Navigator initialRouteName="SplashScreen"  headerShown={false}>
          <Stack.Screen
            options={{headerShown: false}}
            name="SplashScreen"
            component={SplashScreen}
          />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Ana Sayfa" component={MyTabs} options={{headerShown: false}} />
          <Stack.Screen name="Chronometer" component={Chronometer} />
          <Stack.Screen name="LessonVideos" component={LessonVideos} />
          <Stack.Screen name="Mentor" component={Mentor} />
          <Stack.Screen name="QuestionTargets" component={QuestionTargets} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Graph" component={Graph} />
          <Stack.Screen name="Videos" component={Videos} />
          <Stack.Screen name="MentorChange" component={MentorChange} />
          <Stack.Screen name="teacherMain" component={teacherMain} />
          <Stack.Screen name="allStudents" component={allStudents} />


        </Stack.Navigator>
          
        
      
    </NavigationContainer>
    </AuthContextProvider>
  );
  //Top Tabs
  

  //Bottom Tab
  function MyTabs(props) {
    return (
      <Tab.Navigator
        initialRouteName="Ana Sayfa"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: '#7174d0'}}>
        <Tab.Screen
          options={{
            tabBarLabel: 'Ana Sayfa',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={28} />
            ),
          }}
          name="Ana Sayfa"
          component={MainPage}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Grafikler',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="chart-line"
                color={color}
                size={26}
              />
            ),
          }}
          name="LessonVideos"
          component={LessonVideos}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Profil',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
          name="id-card "
          component={Profile}
        />
      </Tab.Navigator>
    );
  }
}

export default Router;
