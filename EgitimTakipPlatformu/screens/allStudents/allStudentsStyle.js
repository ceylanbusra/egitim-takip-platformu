import {StyleSheet} from 'react-native'
export default StyleSheet.create({

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