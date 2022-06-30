import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import globalStyle from '../util/style';
import back from '../components/back';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';


const StackScreen = ({rightButton, text, subText, children, onPress}) => {
  const navigation = useNavigation();
  const OnPressed = () => {
    navigation.goBack();
  };

  return (
    <View style={[globalStyle.flex(1), {paddingTop: globalStyle.paddingTop,}]}>
      <View>
        <View
          style={[
            styles.header,
            globalStyle.row('space-between'),
            {
              backgroundColor: 'blue',
              borderRadius: 5,
              marginBottom: 10,
              paddingRight: 5,

              alignItems: 'center',
          
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                padding: 6,

                borderRadius: 5,
              }}>
              <TouchableOpacity onPress={OnPressed}>
                <MaterialCommunityIcons
                  name="arrow-left"
                  color={'white'}
                  size={25}
                />
              </TouchableOpacity>
            </View>

            {Boolean(text) && (
              <Text
                style={[
                  globalStyle.headerText(),
                  {color: 'white', fontSize: 22, fontWeight: 'bold'},
                ]}>
                {text}
              </Text>
            )}
          </View>
          <View
            style={{
              //  padding: 6,

              borderRadius: 5,
            }}>
            <TouchableOpacity onPress={OnPressed}>
              <MaterialCommunityIcons
                name="logout-variant"
                color={'white'}
                size={25}
              />
            </TouchableOpacity>
          </View>
          {/*Boolean(rightButton) && rightButton*/}
        </View>
        {Boolean(subText) && <Text>{subText}</Text>}
      </View>

      <View style={[globalStyle.flex()]}>{children}</View>
    </View>
  );
};

export default StackScreen;
