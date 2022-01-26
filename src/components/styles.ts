import { StyleSheet } from 'react-native';
import { text, colors } from '~/utils/constants';
import metrices from '~/utils/metrices';

const { size, fontFamily } = text;
const { height, width } = metrices;

const styles = StyleSheet.create({
    //FONT SIZE

    large: {
        fontSize: size.large,
    },

    small: {
        fontSize: size.xSmall,
    },

    tiny: {
        fontSize: size.small,
    },

    xLarge: {
        fontSize: size.xLarge,
    },

    xxLarge: {
        fontSize: size.xxLarge,
    },

    xxxLarge: {
        fontSize: size.xxxLarge,
    },

    //FONTS

    light: {
        fontFamily: fontFamily.poppinsLight,
    },

    regular: {
        fontFamily: fontFamily.poppinsRegular,
        fontWeight: '300',
    },

    poppins: {
        fontFamily: fontFamily.poppinsMedium,
        fontWeight: '400',
        color: colors.black
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

    sm_pad_t: {
        marginTop: 10,
    },

    pad_h: {
        marginHorizontal: 20,
    },

    no_pad_h: {
        marginHorizontal: 0,
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

    no_pad_v: {
        marginVertical: 0,
    },

    pad_top: {
        paddingTop: 10,
    },

    pad_top_lg: {
        marginTop: 50,
    },

    pad_top_none: {
        marginTop: 0,
    },

    pad_top_xlg: {
        marginTop: 80,
    },

    pad_bottom: {
        paddingBottom: 5,
    },

    pad: {
        padding: 20,
    },

    pad_sm: {
        padding: 10,
    },

    pad_vertical: {
        paddingVertical: 10,
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

    justify_fs: {
        justifyContent: 'flex-start',
    },

    align_items_fs: {
        alignItems: 'flex-start',
    },

    justify_fe: {
        justifyContent: 'flex-end',
    },

    align_items_fe: {
        alignItems: 'flex-end',
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

    //Text

    bold: {
        fontWeight: '800',
    },

    text_align_c: {
        textAlign: 'center',
    },

    //COLORS

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
        color: colors.greyAccent,
    },

    gray_dark: {
        color: colors.greyDark,
    },
    gray_light: {
        color: colors.lightGrey,
    },

    none: {
        borderColor: 'transparent',
        borderTopWidth: 0,
    },

    //Background Colors

    blue_bg: {
        backgroundColor: colors.babyBlue,
    },

    grey_bg: {
        backgroundColor: colors.greyLight,
    },

    grey_mid_bg: {
        backgroundColor: colors.greyAccent,
    },

    grey_dark_bg: {
        backgroundColor: colors.greyDark,
    },

    white_bg: {
        backgroundColor: colors.white,
    },

    //Borders

    black_br: {
        borderColor: colors.black,
        borderWidth: 2,
    },

    blue_br_sm: {
        borderColor: colors.primaryBlue,
        borderWidth: 1,
    },

    blue_br: {
        borderColor: colors.primaryBlue,
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

    grey_br_b_md: {
        borderBottomColor: colors.greyAccent,
        borderBottomWidth: 2,
    },

    grey_br_t: {
        borderTopColor: colors.greyAccent,
        borderTopWidth: 1,
    },

    grey_br_t_md: {
        borderTopColor: colors.greyAccent,
        borderTopWidth: 2,
    },

    grey_dark_br_t_md: {
        borderTopColor: colors.greyDark,
        borderTopWidth: 2,
    },

    white_br: {
        borderColor: colors.white,
        borderWidth: 2,
    },

    //Radius

    radius_top: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    radius_bottom: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    radius_sm: {
        borderRadius: 5,
    },

    radius_md: {
        borderRadius: 10,
    },

    radius_lg: {
        borderRadius: 20,
    },

    //Elements

    icon: {
        alignSelf: 'center',
        margin: 5,
    },

    text_space: {
        letterSpacing: 2,
    },

    //Screens

    zero_flex: {
        flex: 0,
    },

    height_25: {
        height: '25%',
    },

    height_30: {
        height: '30%',
    },

    height_50: {
        height: '50%',
    },

    height_75: {
        height: '75%',
    },

    height_250: {
        height: 250,
    },

    height_330: {
        height: 330,
    },

    width_10: {
        width: '10%',
    },

    width_25: {
        width: '25%',
    },

    width_30: {
        width: '30%',
    },

    width_50: {
        width: '50%',
    },

    width_75: {
        width: '75%',
    },

    width_80: {
        width: '80%',
    },

    width_85: {
        width: '85%',
    },

    width_90: {
        width: '90%',
    },

    //Transforms

    flip_90: {
        transform: [{ rotate: '90deg' }],
    },

    flip_180: {
        transform: [{ rotate: '180deg' }],
    },

    flip_270: {
        transform: [{ rotate: '270deg' }],
    },

    //Images

    image_sm: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    image_md: {
        width: 75,
        height: 75,
        borderRadius: 38,
    },

    image_lg: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    image_xLg: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
});

//Transforms

export const card = [
    styles.justify_fs,
    styles.pad_h,
    styles.pad_v,
    styles.white_bg,
    styles.grey_br,
    styles.radius_md,
    styles.hide_overflow,
    styles.zero_flex,
];

export const card_title = [
    styles.pad_sm,
    styles.grey_dark_bg,
    styles.text_align_c,
    styles.xxLarge,
    styles.white,
];

export const select_provider = {
    medium: styles.medium,
    xLarge: styles.xLarge,
    text_align_c: styles.text_align_c,
    image_md: styles.image_md,
    image_lg: styles.image_lg,
    white_bg: styles.white_bg,
    sm_pad_v: styles.sm_pad_v,
    sm_pad_h: styles.sm_pad_h,
    grey_br_b_md: styles.grey_br_b_md,
    white_br: styles.white_br,
    pad_h: styles.pad_h,
    pad_vertical: styles.pad_vertical,
    light: styles.light,
    justify_fs: styles.justify_fs,
    center: styles.center,
    blue_bg: styles.blue_bg,
    pad: styles.pad,
    pad_sm: styles.pad_sm,
    radius_sm: styles.radius_sm,
    hide_overflow: styles.hide_overflow,
    no_pad_v: styles.no_pad_v,
    pad_v: styles.pad_v,
};

export const h1 = [styles.xxLarge, styles.pad_h, styles.sm_pad_v];
export const h2 = [styles.xLarge, styles.pad_h, styles.sm_pad_v];
export const h3 = [styles.large, styles.pad_h];
export const h4 = [styles.medium, styles.pad_h];

export default styles;
