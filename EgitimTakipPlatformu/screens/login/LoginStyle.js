import {StyleSheet} from 'react-native'
export default StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: '#FBFCFD',
        padding: 10,
      },
      photograph: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      },
      photo: {
        width: '100%',
        resizeMode: 'contain',
      },
      content: {
        flex: 3,
        padding: 10,
      },
      textInput: {
        borderBottomWidth: 1,
        borderColor: '#999dec',
        marginVertical: 15,
        width: '100%',
        padding:10,
      
        
      },
      button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        height: '12%',
        backgroundColor: '#0066FF',
        elevation: 5,
        opacity: 0.8,
        borderRadius: 8,
        margin: 20,
        marginTop: 30,
      },
});