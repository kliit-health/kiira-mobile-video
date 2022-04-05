import { StyleSheet } from 'react-native';
import { text, colors } from '../../utils/constants';

export default StyleSheet.create({
    root: {
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        margin: 20,
        marginTop: 70,
        borderRadius: 30,
    },
    ratingStar: {
        marginTop: 20,
        marginBottom: 40,
    },
    title: {
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.large,
        textAlign: 'center',
        fontWeight: '500',
    },
    description: {
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.regular,
        textAlign: 'center',
    },
});

export const modifiers = {
    submitButton: {
        root: {
            flex: 0,
            width: '100%',
        },
    },
    avatar: {
        root: {
            margin: 20,
        },
    },
};
