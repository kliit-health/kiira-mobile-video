import { StyleSheet } from 'react-native';
import { colors, text } from '~/utils/constants';

export default StyleSheet.create({
    root: {
        backgroundColor: colors.white,
        borderRadius: 16,
        height: 200,
        width: '100%',
        alignSelf: 'center',
        marginTop: 50,
    },
    detailsContainer: {
        marginTop: 50,
        padding: 20,
        paddingBottom: 0,
        marginBottom: 0,
        alignItems: 'center',
    },
    title: {
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.xLarge,
    },
    groupContainer: {
        paddingTop: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemTitle: {
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.regular,
        color: colors.charcoal,
        marginBottom: 3,
    },
    itemValue: {
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.regular,
    },
});

export const modifiers = {
    avatar: {
        root: {
            top: -50,
            position: 'absolute',
            alignSelf: 'center',
        },
    },
};
