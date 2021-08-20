import { StyleSheet } from 'react-native';
import { colors, text } from '~/utils/constants';

const { size, fontFamily } = text;

export default StyleSheet.create({
    default: {
        fontSize: size.regular,
        fontFamily: fontFamily.poppinsRegular,
        color: colors.black,
    },

    //FONTS

    large: {
        fontSize: size.large,
    },

    xxlarge: {
        fontSize: size.xxLarge,
    },

    small: {
        fontSize: size.xSmall,
    },

    light: {
        fontFamily: text.fontFamily.poppinsLight,
    },

    medium: {
        fontFamily: text.fontFamily.poppinsMedium,
    },

    //LAYOUT

    horizontalPad: {
        marginHorizontal: 20,
    },

    verticalPad: {
        marginVertical: 20,
    },

    blueBorder: {},

    //COLORS

    active: {
        color: colors.primaryBlue,
        borderColor: colors.azure,
        borderBottomWidth: 3,
    },

    blue: {
        color: colors.primaryBlue,
    },

    inactive: {
        color: colors.blueGrey,
    },

    white: {
        color: colors.white,
    },
});
