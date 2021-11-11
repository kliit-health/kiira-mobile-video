import { StyleSheet } from 'react-native';
import { text, colors } from '~/utils/constants';

export default StyleSheet.create({
    activate: {
        color: colors.primaryBlue,
        backgroundColor: colors.white,
        width: '90%',
        padding: 10,
        textAlign: 'center',
        borderRadius: 20,
        overflow: 'hidden',
    },

    activateContainer: {
        alignItems: 'center',
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    description: {
        color: colors.white,
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.regular,
        padding: 20,
    },

    image: {
        width: '100%',
        height: '100%',
    },

    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2,
    },

    login: {
        color: colors.white,
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.large,
        alignSelf: 'flex-end',
        paddingTop: 30,
        paddingRight: 20,
    },

    root: {
        flex: 1,
        height: '100%',
    },

    title: {
        color: colors.white,
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.xxxLarge,
        fontWeight: '400',
        paddingHorizontal: 20,
    },
});
