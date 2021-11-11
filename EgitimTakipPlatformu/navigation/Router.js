import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  createStackNavigator,
} from '@react-navigation/native-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Sayfa importları
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import LoginScreen from '../screens/Login';
import MainPage from '../screens/MainPage';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import LessonsVideos from '../screens/LessonVideos';
import Chronometer from '../screens/Chronometer';
import Graph from '../screens/Graph';
import LessonVideos from '../screens/LessonVideos';
import Mentor from '../screens/Mentor/';
import QuestionTargets from '../screens/QuestionTargets';
import Profile from '../screens/Profile';
import Videos from '../screens/videos';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function Router({navigation}) {
  return (
    //Stack screen
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Ana Sayfa" component={MyTabs} />
        <Stack.Screen name="Chronometer" component={Chronometer} />
        <Stack.Screen name="LessonVideos" component={LessonVideos} />
        <Stack.Screen name="Mentor" component={Mentor} />
        <Stack.Screen name="QuestionTargets" component={QuestionTargets} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Graph" component={Graph} />
        <Stack.Screen name="Videos" component={Videos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
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
