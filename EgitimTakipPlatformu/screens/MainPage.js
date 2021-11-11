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
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: '1',
    title: 'Ders Videoları',
    image: require('../assets/lessonVideos.png'),
    routeName: 'LessonVideos',
  },
  {
    id: '2',
    title: 'Soru Hedefleri',
    image: require('../assets/soru_hedefleri.png'),
    routeName: 'QuestionTargets',
  },
  {
    id: '3',
    title: 'Profilim',
    image: require('../assets/danisman.png'),
    routeName: 'Profile',
  },
  {
    id: '4',
    title: 'Grafiklerim',
    image: require('../assets/Students.png'),
    routeName: 'Graph',
  },
  {
    id: '5',
    title: 'Danışman',
    image: require('../assets/danisman.png'),
    routeName: 'Mentor',
  },
  {
    id: '6',
    title: 'Kronometre',
    image: require('../assets/lessonVideos.png'),
    routeName: 'Chronometer',
  },
];

const MainPage = props => {
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
        <Image
          source={item.image}
          style={{
            width: 160,
            height: 150,
            flex: 1,
            resizeMode: 'contain',
          }}></Image>
        <Text style={[styles.title]}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        numColumns={numColumns}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 8,
    backgroundColor: '#0066FF',
  },
  title: {
    fontSize: 20,
    color: '#fbfcfd',
  },
});

export default MainPage;
