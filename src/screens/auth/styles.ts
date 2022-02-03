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
        alignSelf: 'flex-end',
    },

    leftIcon: {
        margin: metrics.height * 0.02,
        marginLeft: metrics.height * 0.01,
        height: metrics.width * 0.08,
        width: metrics.width * 0.08,
        alignSelf: 'flex-start', 
    },

    backStyle: {  
        width: 40,  
    },

    backText: {
        marginHorizontal: metrics.width * 0.02, 
        paddingRight:metrics.height * 0.03,
        marginTop: metrics.height * 0.03, 
        color:'#fff',
        fontWeight:'400',
        fontSize:size.regular,
        fontFamily: fontFamily.poppinsRegular,
        alignSelf: 'flex-end', 
    },

    helloStyle: {   
        color:'#fff',
        fontWeight:'400',
        fontSize:size.xxxLarge,
        fontFamily: fontFamily.poppinsRegular, 
        textAlign:'left',
        marginTop: metrics.height * 0.03, 
        marginHorizontal: 30,
    },

    titleStyle: {   
        color:'#fff',
        fontWeight:'400', 
        fontSize:size.xsLarge,
        fontFamily: fontFamily.poppinsRegular,
        alignSelf: 'center',
        textAlign:'left',
        marginTop: metrics.height * 0.05, 
        marginHorizontal: 30,
        lineHeight:36
    },

    infoStyle: {   
        color:'#fff',
        fontWeight:'300', 
        fontSize:size.regular,
        fontFamily: fontFamily.poppinsRegular, 
        textAlign:'left',
        marginTop: metrics.height * 0.08,  
        marginHorizontal: 30,
    },

    contentStyle: {   
        color:'#fff',
        fontWeight:'300', 
        fontSize:size.regular,
        fontFamily: fontFamily.poppinsRegular, 
        textAlign:'left',
        marginTop: metrics.height * 0.05,  
        marginHorizontal: 30,
    },

    biometrics: {
        alignSelf: 'center',
        height: metrics.width * 0.1,
        width: metrics.width * 0.1,
        marginTop: metrics.height * 0.05,
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

    activateContainer:{
        padding: 0
    },

    forgotPasswordText: {
        textAlign: 'center',
        marginTop: metrics.height * 0.05,
        color: colors.primaryBlue,
        fontSize: text.size.medium,
        width: metrics.width - parentPadding,
        paddingLeft: childPaddingValue,
        paddingRight: childPaddingValue,
        fontFamily: text.fontFamily.poppinsRegular,
        marginBottom: metrics.height * 0.02,
    },

    inputTextParentContainer: {
        flexDirection: 'column',
        width: metrics.width - parentPadding,
        marginTop: metrics.height * 0.01,
        paddingLeft: childPaddingValue,
        paddingRight: childPaddingValue, 
    },

    inputTextActiveContainer: {
        flexDirection: 'column',
        width: metrics.width - 40,
        marginTop: metrics.height * 0.1,   
        marginBottom: metrics.height * 0.04,   
        alignSelf:'center'
    },

    inputTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: metrics.width - childPadding,
        paddingBottom: Platform.OS === 'ios' ? metrics.height * 0.01 : 0,
        marginTop: metrics.height * 0.02,
        borderBottomColor: colors.greyAccent,
        borderBottomWidth: 0.5,
    },

    inputTextActive: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: metrics.width - metrics.width * 0.1,
        paddingBottom: Platform.OS === 'ios' ? metrics.height * 0.01 : 0,
        marginTop: metrics.height * 0.01,
        borderBottomColor: colors.white,
        borderBottomWidth: 0.5,
    },

    inputType: {
        color: colors.black,
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        textAlign: 'left',
        width: metrics.width - childPadding,
    },

    activeInpute: {
        color: colors.white,
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        textAlign: 'left',
        width: metrics.width - metrics.width * 0.12, 
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

    activeButton: {
        alignSelf: 'center',
        borderRadius: dimensions.btnBorderRadiusGlobal,
        padding: dimensions.btnPaddingGlobal,
        width: metrics.width - 60,
        backgroundColor: colors.white,
        marginTop: metrics.height * 0.05, 
    },

    loginButtonText: {
        textAlign: 'center',
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        color: colors.white,
    },

    activeButtonText: {
        textAlign: 'center',
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        color: colors.azure, 
    },  

    logo: {
        alignSelf: 'center',
        height: metrics.width * 0.2,
        width: metrics.width * 0.2,
    },

    logo2: {
        alignSelf: 'center',
        height: metrics.width * 0.35,
        width: metrics.width * 0.35,
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

    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',  
        backgroundColor: colors.white, 
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
        color: colors.greyDark,
        padding: 20,
    },

    welcomeStyle: {
        textAlign: 'center',
        fontSize: size.xxxLarge,
        fontFamily: fontFamily.poppinsRegular,
        fontWeight: '400',
        marginTop: 30,
    }
});

export default styles;
