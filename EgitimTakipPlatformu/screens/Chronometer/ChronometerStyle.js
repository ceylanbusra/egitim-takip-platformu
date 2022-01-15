
import {StyleSheet,Dimensions} from 'react-native'
const screen = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#304FFE',
        alignItems: 'center',
        justifyContent: 'center',
      },
      button: {
        borderWidth: 10,
        borderColor: '#b9aaff',
        width: screen.width / 2,
        height: screen.width / 2,
        borderRadius: screen.width / 2,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        fontSize: 45,
        color: '#b9aaff',
      },
      timerText: {
        color: '#fff',
        fontSize: 90,
        marginBottom: 20,
      },
      buttonReset: {
        marginTop: 20,
        borderColor: '#ff851b',
      },
      buttonTextReset: {
        color: '#ff8f1b',
      },
});