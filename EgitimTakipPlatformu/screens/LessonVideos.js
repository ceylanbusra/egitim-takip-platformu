import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import lesson_data from '../data/lesson_data.json';

const LessonVideos = props => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}, props) => {
    return (
      <SafeAreaView style={{flex: 1, padding: 10}}>
        <TouchableOpacity
          onPress={props => {
            navigation.navigate(item.routeName);
          }}
          style={{
            backgroundColor: 'blue',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text style={{color: '#ffff', fontSize: 20}}>{item.title}</Text>
          <FontAwesome5 name="angle-right" color={'#ffff'} size={28} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={lesson_data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default LessonVideos;
