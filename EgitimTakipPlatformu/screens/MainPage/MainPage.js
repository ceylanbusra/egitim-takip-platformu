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
import styles from './MainPageStyle';
import StackScreen from '../../StackLayout/index'
import {useNavigation} from '@react-navigation/native';
import { AuthContext } from '../../context/auth';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DATA = [
  {
    id: '1',
    title: 'Ders Videoları',
    image: require('../../assets/lessoVideos2.png'),
    routeName: 'LessonVideos',
  },
  {
    id: '2',
    title: 'Soru Hedefleri',
    image: require('../../assets/soru_hedefleri.png'),
    routeName: 'QuestionTargets',
  },
  {
    id: '3',
    title: 'Profilim',
    image: require('../../assets/danisman.png'),
    routeName: 'Profile',
  },
  {
    id: '4',
    title: 'Grafiklerim',
    image: require('../../assets/graph.png'),
    routeName: 'Graph',
  },
  {
    id: '5',
    title: 'Danışman',
    image: require('../../assets/danisman.png'),
    routeName: 'Mentor',
  },
  {
    id: '6',
    title: 'Kronometre',
    image: require('../../assets/clock.png'),
    routeName: 'Chronometer',
  },
];

const MainPage = props => {
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



export default MainPage;
