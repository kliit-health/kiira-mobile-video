import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    actions: {
        marginTop: 'auto',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export const buttonStyles = StyleSheet.create({
    root: {
        margin: 10,
    },
    text: {
        fontSize: 14,
    },
});
