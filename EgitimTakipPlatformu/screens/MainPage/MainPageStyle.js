import {StyleSheet,Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: windowWidth * 0.4,
        height: windowHeight * 0.22,
        flex: 1,
        resizeMode: 'contain',
      },
      item: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 8,
        backgroundColor: '#0066FF',
        elevation: 5,
        opacity: 0.8,
        shadowColor: '#7F5DF0',
        shadowOpacity: 0.5,
        shadowRadius: 3.5,
      },
      title: {
        fontSize: 20,
        color: '#fbfcfd',
      },

});