import { StyleSheet } from 'react-native';
import { colors, text } from '~/utils/constants';

export default StyleSheet.create({
    container: {
        zIndex: 100,
        paddingHorizontal: '10%',
        paddingVertical: 20,
    },

    root: {
        backgroundColor: colors.white,
        borderRadius: 16,
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        padding: 5,
        marginBottom: 20,
    },

    detailsContainer: {
        padding: 5,
        alignItems: 'center',
    },

    title: {
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.xLarge,
    },

    icon: {
        marginRight: 5,
    },

    itemContainer: {
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-between',
        padding: 5,
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
            marginTop: 10,
            alignSelf: 'center',
        },
    },
};
