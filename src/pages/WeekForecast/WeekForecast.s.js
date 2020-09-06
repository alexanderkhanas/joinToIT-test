import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: "10%",
        paddingVertical: 10
    },
    input: {
        flex: 1,
        fontFamily: "Montserrat-Regular",
        fontSize: 20
    },
    title: {
        fontSize: 30,
        fontFamily: "Montserrat-Bold",
        marginVertical: 20,
        marginLeft: "10%"
    },
    cardsContainer: {
        marginHorizontal: "5%",
        paddingHorizontal: "10%",
        paddingVertical: 20,
        backgroundColor: "#cccccc20",
        borderRadius: 20
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});
