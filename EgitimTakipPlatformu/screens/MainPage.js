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

const DATA = [
  {
    id: '1',
    title: 'Ders Videoları',
    image: '../assets/Students.png',
    routeName: 'Graph',
  },
  {
    id: '2',
    title: 'Soru Hedefleri',
    image: '../assets/Students.png',
    routeName: 'Graph',
  },
  {
    id: '3',
    title: 'Profilim',
    image: '../assets/Students.png',
    routeName: 'Graph',
  },
  {
    id: '4',
    title: 'Grafiklerim',
    image: '../assets/Students.png',
    routeName: 'Graph',
  },
  {
    id: '5',
    title: 'Danışman',
    image: '../assets/Students.png',
    routeName: 'Graph',
  },
  {
    id: '6',
    title: 'Kronometre',
    image: '../assets/Students.png',
    routeName: 'Graph',
  },
];

const Item = ({
  navigation: navigate,
  item,
  onPress,
  backgroundColor,
  textColor,
}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Image
      source={item.image}
      style={{width: 160, height: 150, flex: 1}}></Image>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const MainPage = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);
  const numColumns = 2;

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#a47386' : '#7174d0';
    const color = item.id === selectedId ? '#fbfcfd' : '#1e2944';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
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
  },
  title: {
    fontSize: 20,
  },
});

export default MainPage;
