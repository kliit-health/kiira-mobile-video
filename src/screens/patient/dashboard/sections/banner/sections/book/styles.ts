import { StyleSheet } from 'react-native';
import { colors, text } from '~/utils/constants';

export default StyleSheet.create({
    container: {
        position: 'relative',
        margin: 16,
        marginTop: 'auto',
        backgroundColor: colors.white,
        flexDirection: 'column',
        borderRadius: 8,
    },
    description: {
        fontFamily: text.fontFamily.poppinsLight,
        color: colors.black,
        fontSize: text.size.xLarge,
        padding: 12,
        paddingRight: 12,
    },
    actions: {
        flexDirection: 'row',
        marginHorizontal: 12,
        marginBottom: 12,
        justifyContent: 'space-evenly',
    },
});

export const buttonStyles = StyleSheet.create({
    container: {
        margin: 0,
        backgroundColor: 'transparent',
        borderLeftWidth: 2,
        borderRadius: 0,
    },
    title: {
        color: colors.black,
        textAlign: 'left',
        fontSize: text.size.large,
        padding: 0,
        paddingLeft: 8,
        paddingVertical: 0,
        fontFamily: text.fontFamily.poppinsMedium,
    },
});
