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
import {TextInput} from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import question_target from '../data/question_targets.json';
import QuestionTargetsCard from '../components/QuestionTargetCard';
const dersler = ['Matematik', 'Türkçe', 'Biyoloji', 'Fizik'];

const QuestionTargets = () => {
  const [data, setData]=useState(question_target);
  const [lessonName, setLessonName] = useState('');
  const [totalNumber, setTotalNumber] = useState(0);
  const [selected,setSelected] =useState('');
  const renderProduct = ({item}) => <QuestionTargetsCard target ={item} />
  
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.firstContainer}>
      <SelectDropdown
        data={dersler}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
         
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          setSelected(selectedItem);
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        defaultButtonText="Ders Adı Seçiniz."
        buttonTextStyle={styles.buttonTextStyle}
        buttonStyle={styles.selectedButton}
        renderDropdownIcon={() => (
          <View>
            <FontAwesome5
              name="caret-down"
              size={15}
              color="#78849E"
              style={{marginRight: 10}}
            />
          </View>
        )}
      />
      <TextInput
        placeholder="Hedef Soru Sayısını Giriniz.."
        style={styles.TextInput}
        onChangeText={(value)=>setTotalNumber(value)}
      />
      <TouchableOpacity
        style={styles.button}
        //buraya bi düzenleme çek yarın guzuum hadi bakayım
        onPress={() => alert("totalNumber:",selected)}>
        <Text style={styles.buttonText}>Kaydet</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.secondContainer}>
      
      <Text style={styles.mainText}>Haftalık Hedef Soru Sayıları</Text>
      <FlatList data={data} renderItem={renderProduct} />
      </View>
    </SafeAreaView>
  );
};
export default QuestionTargets;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
  },
  firstContainer:{
    flex:1,justifyContent:'space-around',alignItems:'center'
  },
  secondContainer:{
    flex:1
  },
  button: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 12,
    margin: 5,
    borderRadius: 8,
    margin: 10,
    width: '100%',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    //fontWeight:'bold',
  },
  selectedButton: {
    borderRadius: 5,
    backgroundColor: '#FFF',
    width: '100%',
  },
  TextInput: {
    backgroundColor: 'transparent',
    borderColor: '#999dec',
    margin: 10,
    width: '100%',
    height: '5%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  mainText: {
    fontSize: 22,
    color: 'black',
    textAlign:'center',
    padding:8,

  },
  buttonTextStyle:{
    color: '#78849E',
          textAlign: 'left',
          fontSize: 20,
          paddingLeft: '2%',
  }
});
