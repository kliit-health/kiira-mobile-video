import { StyleSheet } from 'react-native';
import { colors, text } from '../../utils/constants';

export default StyleSheet.create({
    root: {
        width: 100,
        aspectRatio: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: colors.blue,
    },
    text: {
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.large,
        fontWeight: '500',
        color: colors.blue,
        marginTop: 10,
    },
});

export const modifiers = StyleSheet.create({
    root: {
        backgroundColor: colors.blue,
    },
    text: {
        color: colors.white,
    },
});
