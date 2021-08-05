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
    time: {
        fontFamily: text.fontFamily.poppinsRegular,
        fontWeight: '500',
        color: colors.black,
        fontSize: text.size.regular,
    },
    appointment: {
        flexDirection: 'row',
        margin: 12,
        alignItems: 'flex-end',
    },
});

export const buttonStyles = StyleSheet.create({
    container: {
        marginLeft: 'auto',
    },
});
