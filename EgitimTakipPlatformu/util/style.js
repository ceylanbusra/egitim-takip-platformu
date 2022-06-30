import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export default StyleSheet.create({
    flex: (grow, justifyContent) => {
        return {
            flex: grow || 1,
            justifyContent: justifyContent || "flex-start",
        };
    },
    inputWrapper: {
        paddingVertical: 10,
    },
    row: (justifyContent, alignItems) => {
        return {
            flexDirection: "row",
            justifyContent: justifyContent || "center",
            alignItems: alignItems || "center",
        };
    },
    paddingTop: 30,
    headerText: (fontSize, paddingBottom) => {
        return {
            fontSize: fontSize || 25,
            fontWeight: "bold",
            paddingBottom: paddingBottom || 15,
        };
    },
});
