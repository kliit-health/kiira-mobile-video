import { StyleSheet } from 'react-native';
import { colors, text } from '~/utils/constants';

const { size, fontFamily } = text;

export default StyleSheet.create({
    default: {
        fontSize: size.regular,
        fontFamily: fontFamily.poppinsRegular,
        color: colors.black
    },

    small: {
        fontSize: size.xSmall,
    },

    active: {
        color: colors.primaryBlue,
    }
})