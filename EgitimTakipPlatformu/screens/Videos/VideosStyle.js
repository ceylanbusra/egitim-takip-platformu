
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export default StyleSheet.create({

    container: {
        flex: 1,
      },
      titleText: {
        flex: 1,
        fontSize: 22,
        fontWeight: 'bold',
      },
      header: {
        backgroundColor: '#F5FCFF',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      headerText: {
        fontSize: 16,
        fontWeight: '500',
      },
      separator: {
        height: 0.5,
        backgroundColor: '#808080',
        width: '95%',
        marginLeft: 16,
        marginRight: 16,
      },
      text: {
        fontSize: 16,
        color: '#606070',
        padding: 10,
      },
      content: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      },
      linkWrapper: {
        justifyContent: "center",
        alignItems: "center",
    },
    thumbnail: {
       width: width - 40,
        height: height * 0.25,
        alignItems: "center",
        justifyContent: "center",
    },
});