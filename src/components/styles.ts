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

    //FONTS

    light: {
        fontFamily: fontFamily.poppinsLight,
    },

    regular: {
        fontFamily: fontFamily.poppinsRegular,
        fontWeight: '300',
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

    pad: {
        padding: 20,
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

    //Elements

    icon: {
        alignSelf: 'center',
        margin: 5,
    },

    text_space: {
        letterSpacing: 2,
    },

    //Screens

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
});

export const card = [
    styles.justify_fs,
    styles.pad_h,
    styles.pad_v,
    styles.white_bg,
    styles.grey_br,
    styles.radius_md,
];

export default styles;
