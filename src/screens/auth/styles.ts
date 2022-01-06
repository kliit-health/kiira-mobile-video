import { StyleSheet, Platform } from 'react-native';
import { text, colors, dimensions } from '~/utils/constants';
import metrics, { smallScreen } from '~/utils/metrices';
import { getStatusBarHeight } from '~/components/iPhoneXHelper';

let parentPaddingValue = metrics.width * 0.08;
let parentPadding = parentPaddingValue * 2;
let childPaddingValue = metrics.width * 0.03;
let childPadding = parentPadding + childPaddingValue * 2;

const { size, fontFamily } = text;

const styles = StyleSheet.create({
    backIcon: {
        margin: metrics.height * 0.02,
        height: metrics.width * 0.05,
        width: metrics.width * 0.05,
        alignSelf: 'flex-start',
        transform:[{rotate:'180deg'}]
    },

    biometrics: {
        alignSelf: 'center',
        height: metrics.width * 0.15,
        width: metrics.width * 0.15,
        marginTop: metrics.height * 0.05,
       color:'red'
    },

    buttonContainer: {
        alignSelf: 'center',
        borderRadius: dimensions.btnBorderRadiusGlobal,
        padding: dimensions.btnPaddingGlobal,
        width: metrics.width - childPadding,
        backgroundColor: colors.primaryBlue,
        marginTop: metrics.height * 0.02,
    },

    buttonText: {
        textAlign: 'center',
        fontSize: size.regular,
        color: colors.white,
        fontFamily: fontFamily.poppinsRegular,
    },

    contentContainer: {
        padding: smallScreen ? 0 : parentPaddingValue,
    },

    forgotPasswordText: {
        textAlign: 'center',
        marginTop: metrics.height * 0.06,
        color: colors.primaryBlue,
        fontSize: text.size.medium,
        width: metrics.width - parentPadding,
        paddingLeft: childPaddingValue,
        paddingRight: childPaddingValue,
        fontFamily: text.fontFamily.poppinsRegular,

    },

    inputTextParentContainer: {
        flexDirection: 'column',
        width: metrics.width - parentPadding,
        paddingLeft: childPaddingValue,
        paddingRight: childPaddingValue,
    },

    inputTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: metrics.width - childPadding,
        paddingBottom: Platform.OS === 'ios' ? metrics.height * 0.01 : 0,
        marginTop: metrics.height * 0.01,
        borderBottomColor: colors.gray,
        borderBottomWidth: 0.5,
    },

    inputType: {
        color: colors.black,
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        textAlign: 'left',
        width: metrics.width - childPadding,
    },

    inputTypePassword: {
        color: colors.black,
        fontSize: text.size.regular,
        textAlign: 'left',
        width: metrics.width - childPadding - metrics.width * 0.05,
    },

    loginButton: {
        alignSelf: 'center',
        borderRadius: dimensions.btnBorderRadiusGlobal,
        padding: dimensions.btnPaddingGlobal,
        width: metrics.width - childPadding,
        backgroundColor: colors.primaryBlue,
        marginTop: metrics.height * 0.02,
    },

    loginButtonText: {
        textAlign: 'center',
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        color: colors.white,
    },

    logo: {
        alignSelf: 'center',
        height: metrics.width * 0.25,
        width: metrics.width * 0.25,
    },

    parentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: getStatusBarHeight(null), 
        backgroundColor: colors.white,
        borderRadius: 35,
        overflow: 'hidden',
    },

    passwordHideShowIcon: {
        height: metrics.width * 0.05,
        width: metrics.width * 0.05,
        marginTop: metrics.height * 0.02,
    },

    subTitleText: {
        marginTop: metrics.height * 0.01,
        textAlign: 'center',
        fontSize: size.regular,
        fontFamily: fontFamily.poppinsRegular,
        color: colors.black,
        width: metrics.width - childPadding,
    },

    titleContainer: {
        marginTop: metrics.height * 0.08,
        flexDirection: 'column',
        width: metrics.width - parentPadding,
        paddingLeft: childPaddingValue,
        paddingRight: childPaddingValue,
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleText: {
        textAlign: 'center',
        fontSize: size.xxLarge,
        fontFamily: fontFamily.poppinsSemiBold,
        color: colors.black,
        width: metrics.width - childPadding,
    },

    version: {
        alignSelf: 'center',
        color:colors.gray,
        marginTop:'5%'
    },
    welcomeText:{
        fontSize: size.xxLarge,
        fontFamily: text.fontFamily.poppinsMedium, 
        marginHorizontal:'15%',
        textAlign: 'center',
        marginTop:'15%'
    },
});

export default styles;
