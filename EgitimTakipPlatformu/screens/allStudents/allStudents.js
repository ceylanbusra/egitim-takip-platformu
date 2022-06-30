import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import all_Students from '../../data/allStudents.json';
import AllStudentsCard from '../../components/allStudentsCard'
import styles from './allStudentsStyle';



const allStudents = () => {
  const [data, setData] = useState(all_Students);
  const renderProduct = ({item}) => <AllStudentsCard target={item} />;

  return (
    <SafeAreaView style={styles.mainContainer}>
    
      <View style={styles.secondContainer}>
        <Text style={styles.mainText}>Tüm Öğrencilerin Listesi</Text>
        <FlatList data={data} renderItem={renderProduct} />
      </View>
    </SafeAreaView>
  );
};
export default allStudents;
