import { StyleSheet } from 'react-native';
import { text, colors } from '~/utils/constants';
import metrices from '~/utils/metrices';

const { size, fontFamily } = text;

export default StyleSheet.create({
    //FONT SIZE

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

    //FONTS

    light: {
        fontFamily: fontFamily.poppinsLight,
    },

    regular: {
        fontFamily: fontFamily.poppinsRegular,
    },

    medium: {
        fontFamily: fontFamily.poppinsMedium,
    },

    //SPACE

    space_sm: {
        letterSpacing: 1,
    },

    space_md: {
        letterSpacing: 3,
    },

    space_lg: {
        letterSpacing: 5,
    },

    space_around: {
        justifyContent: 'space-around',
    },

    space_evenly: {
        justifyContent: 'space-evenly',
    },

    space_between: {
        justifyContent: 'space-between',
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

    expand: {
        flex: 1,
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

    pad_v_md: {
        marginVertical: 30,
    },

    pad_v_lg: {
        marginVertical: 40,
    },

    pad_top: {
        paddingTop: 10,
    },

    pad_top_lg: {
        marginTop: 50,
    },

    pad_top_xlg: {
        marginTop: 80,
    },

    pad_bottom: {
        marginTop: 30,
        marginBottom: 5,
        paddingBottom: 20,
    },

    center: {
        alignSelf: 'center',
    },

    justify_c: {
        justifyContent: 'center',
    },

    align_items_c: {
        alignItems: 'center',
    },

    centerText: {
        textAlign: 'center',
    },

    width: {
        width: '100%',
    },

    width_auto: {
        width: 'auto',
    },

    height: {
        height: 300,
    },

    height_auto: {
        height: 'auto',
    },

    full: {
        flex: 1,
    },

    hide_overflow: {
        overflow: 'hidden',
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

    gray: {
        color: colors.lightGrey,
    },

    gray_dark: {
        color: colors.greyDark,
    },

    none: {
        borderColor: 'transparent',
    },

    //Background Colors

    blue_bg: {
        backgroundColor: colors.babyBlue,
    },

    grey_bg: {
        backgroundColor: colors.greyLight,
    },

    white_bg: {
        backgroundColor: colors.white,
    },

    //Borders

    black_br: {
        borderColor: colors.black,
        borderWidth: 2,
    },

    blue_br_b: {
        borderBottomColor: colors.primaryBlue,
        borderBottomWidth: 2,
    },

    clear_br_b: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 2,
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
