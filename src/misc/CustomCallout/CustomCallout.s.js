import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        minHeight: 100,
        width: 200,
        backgroundColor: "#fff",
        padding: 10,
    },
    loadingMessage: {
        fontFamily: "Montserrat-Regular",
        fontSize: 25,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontFamily: "Montserrat-Regular",
        fontSize: 20,
    },
    body: {
        fontFamily: "Montserrat-Regular",
        fontSize: 17
    },
    inner: {
        flex: 1,
        justifyContent: "space-between"
    }
});
