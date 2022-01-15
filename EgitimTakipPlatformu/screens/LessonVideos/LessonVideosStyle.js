
import {StyleSheet,StatusBar} from 'react-native'
export default StyleSheet.create({
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
      item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#0066FF',
        elevation: 5,
        opacity: 0.9,
        shadowColor: '#7F5DF0',
        shadowOpacity: 0.7,
        shadowRadius: 3.5,
      },
});