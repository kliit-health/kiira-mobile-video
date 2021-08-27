import { StyleSheet } from 'react-native';
import { text, colors } from '~/utils/constants';
import metrices from '~/utils/metrices';

const { size, fontFamily } = text;

export default StyleSheet.create({
    //FONTS

    large: {
        fontSize: size.large,
    },

    xLarge: {
        fontSize: size.xLarge,
    },

    xxLarge: {
        fontSize: size.xxLarge,
    },
    tiny: {
        fontSize: size.small,
    },

    small: {
        fontSize: size.xSmall,
    },

    light: {
        fontFamily: fontFamily.poppinsLight,
    },

    regular: {
        fontFamily: fontFamily.poppinsRegular,
        letterSpacing: 3,
    },

    medium: {
        fontFamily: fontFamily.poppinsMedium,
    },

    //LAYOUT

    absolute: {
        position: 'absolute',
        top: -20,
        zIndex: 10,
        height: 50,
        width: metrices.width,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },

    bottom: {
        borderTopWidth: 0,
        borderBottomWidth: 3,
        paddingHorizontal: 5,
    },

    sm_pad_h: {
        marginHorizontal: 10,
    },

    pad_h: {
        marginHorizontal: 20,
    },

    pad_l: {
        marginLeft: 20,
    },

    pad_r: {
        marginRight: 20,
    },

    pad_t: {
        marginTop: 20,
    },

    pad_b: {
        marginBottom: 20,
    },

    sm_pad_v: {
        marginVertical: 10,
    },

    pad_v: {
        marginVertical: 20,
    },

    pad_top: {
        paddingTop: 10,
    },

    pad_bottom: {
        marginTop: 30,
        marginBottom: 5,
        paddingBottom: 20,
    },

    center: {
        alignSelf: 'center',
    },

    centerText: {
        textAlign: 'center',
    },

    width_auto: {
        width: 'auto',
    },

    //COLORS

    active: {
        color: colors.primaryBlue,
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

    black: {
        color: colors.black,
    },

    grey: {
        backgroundColor: colors.greyLight,
    },

    none: {
        borderColor: 'transparent',
    },

    //Background Colors

    blue_bg: {
        backgroundColor: colors.babyBlue,
    },

    //Borders

    black_br: {
        borderColor: colors.black,
        borderWidth: 2,
    },

    blue_br_b: {
        borderBottomColor: colors.primaryBlue,
        borderBottomWidth: 1,
    },

    grey_br: {
        borderColor: colors.greyAccent,
        borderWidth: 1,
    },

    grey_br_b: {
        borderBottomColor: colors.greyAccent,
        borderBottomWidth: 1,
    },

    //Radius

    radius_sm: {
        borderRadius: 5,
    },

    radius_md: {
        borderRadius: 10,
    },

    radius_lg: {
        borderRadius: 20,
    },
});
