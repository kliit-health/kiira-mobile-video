import { StyleSheet, Platform } from 'react-native';
import { text, colors, dimensions } from '~/utils/constants';
import metrics, { smallScreen } from '~/utils/metrices';
import { getStatusBarHeight } from '~/components/iPhoneXHelper';
import { IOS } from 'react-native-permissions/lib/typescript/constants';

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
    becomeMember: { 
        marginHorizontal:30, 
        paddingVertical: 12,  
        color: colors.primaryBlue,
        backgroundColor: colors.white,
        width: '100%', 
        textAlign: 'center',
        borderRadius: 22,
        overflow: 'hidden',
    },

    kiiraContainer: { 
        marginHorizontal:30,  
        marginVertical:50,
        alignItems: 'center', 
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

    activateContainer:{
        padding: 0
    },
    welcomKiiraContainer:{
       padding:'3%',
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
    activeButton: { 
        marginHorizontal:'7%',
        marginVertical:'8%', 
         paddingVertical: 12, 
        color: colors.primaryBlue,
        backgroundColor: colors.white,
        textAlign: 'center',
        borderRadius: 22,
        overflow: 'hidden',
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
        marginTop: Platform.OS === 'ios' ? 20 : 0, 
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

    welcomeStyle: {
        textAlign: 'center',
        fontSize: size.xxxLarge,
        fontFamily: fontFamily.poppinsRegular,
        fontWeight: '400',
        marginTop: 30,
    }
});

export default styles;
