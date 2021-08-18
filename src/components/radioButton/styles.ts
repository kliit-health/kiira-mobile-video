import { StyleSheet } from 'react-native';
import { text, colors } from '../../utils/constants';

export default StyleSheet.create({
    root: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    ring: {
        height: 24,
        width: 24,
        borderRadius: 100,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: colors.gray,
        alignContent: 'center',
        justifyContent: 'center',
    },
    circle: {
        height: 16,
        width: 16,
        borderRadius: 100,
        backgroundColor: 'transparent',
        alignSelf: 'center',
    },
    label: {
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.regular,
        color: colors.gray,
        marginLeft: 10,
        marginTop: 2,
    },
});

export const modifiers = {
    selected: {
        ring: {
            borderColor: colors.blue,
        },
        circle: {
            backgroundColor: colors.blue,
        },
        root: {
            borderColor: colors.blue,
        },
        label: {
            color: colors.blue,
        },
    },
    boxed: {
        root: {
            alignSelf: 'auto',
            width: '100%',
            borderWidth: 1,
            borderColor: colors.gray,
            borderRadius: 6,
            padding: 10,
        },
    },
};
