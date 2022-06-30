import React, {useContext, useState} from 'react';
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
  FlatList,
  Dimensions,
} from 'react-native';
import styles from './teacherMainStyle';
import StackScreen from '../../StackLayout/index'
import {useNavigation} from '@react-navigation/native';
import { AuthContext } from '../../context/auth';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DATA = [
  {
    id: '1',
    title: 'Tüm Öğrenciler ',
    image: require('../../assets/5251.jpg'),
    routeName: 'allStudents',
  },
  {
    id: '2',
    title: 'Profilim',
    image: require('../../assets/profile.jpg'),
    routeName: 'Profile',
  },
 
];

const teacherMain = props => {
  const {user} = useContext(AuthContext);
  const [selectedId, setSelectedId] = useState(null);
  const numColumns = 2;
  const navigation = useNavigation();
  

  const renderItem = ({item}, props) => {
    console.log('returnun üstü', item.id);
   
    return (
   
      <TouchableOpacity
        onPress={props => {
          console.log('çalışan yer 1', item);
          setSelectedId(item.id);
          console.log('calisan yer 2', selectedId);
          navigation.navigate(item.routeName);
        }}
        style={[styles.item]}>
        <Image source={item.image} style={styles.image}></Image>
        <Text style={[styles.title]}>{item.title}</Text>
      </TouchableOpacity>
     
    );
  };

  return (
   
    <SafeAreaView style={styles.container}>
      <StackScreen text={("Ana Sayfa")}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        numColumns={numColumns}
      />
      
     
      </StackScreen>

    </SafeAreaView>
    
  );
};



export default teacherMain;
