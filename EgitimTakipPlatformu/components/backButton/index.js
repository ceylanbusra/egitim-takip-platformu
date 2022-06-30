import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const backButton = () => {
  function onPressed() {
    navigation = useNavigation();
    return navigation.goback();
  }

  return (
    <View  style={{
      padding: 6,
      borderColor:'white',
      borderWidth: 1,
      borderRadius: 5,
  }}>
      <MaterialCommunityIcons
        name="back"
        color={'#0066FF'}
        size={20}
        onPress={onPressed}
      />
    </View>
  );
};
export default backButton;
