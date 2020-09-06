import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
    },
    button: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 15,
    },
    secondaryButtonRight: {
        backgroundColor: "#e6e6e6",
        borderTopLeftRadius: 25
    },
    secondaryButtonLeft: {
        backgroundColor: "#e6e6e6",
        borderTopRightRadius: 25
    },
    icon: {
        fontSize: 20
    }
});
