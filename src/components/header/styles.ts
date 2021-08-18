import { StyleSheet } from 'react-native';
import { colors, text } from '../../utils/constants';

export default StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        backgroundColor: colors.white,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: colors.offWhite,
    },
    title: {
        position: 'absolute',
        textAlign: 'center',
        left: 0,
        right: 0,
        color: colors.black,
        fontSize: text.size.large,
        fontFamily: text.fontFamily.poppinsRegular,
        fontWeight: '500',
    },
    editButton: {
        marginLeft: '42%',
        flex: 0,
    },
});

export const modifiers = {
    themed: {
        root: {
            backgroundColor: colors.azure,
            borderBottomWidth: 0,
        },
        title: {
            color: colors.white,
            fontSize: text.size.xLarge,
        },
        backButton: {
            root: {
                marginBottom: 3,
            },
        },
    },
    backButton: {
        image: {
            transform: [{ rotate: '180deg' }],
        },
    },
};
