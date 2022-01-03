import { StyleSheet } from 'react-native';
import metrics from '~/utils/metrices';
import { text, colors, dimensions } from '~/utils/constants'; 
const { size, fontFamily } = text;

let parentPaddingValue = metrics.width * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = metrics.width * 0.03;
let childPadding = parentPadding + childPaddingValue * 2;

export const AVATAR_SIZE = 111;

const style = StyleSheet.create({
    buttonContainer: {
        alignSelf: 'center',
        borderRadius: 10,
        padding: 10,
        width: metrics.width - childPadding,
        backgroundColor: colors.blue,
        marginTop: metrics.height * 0.03,
    },

    buttonText: {
        textAlign: 'center',
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        color: colors.white,
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.offWhite,
    },

    image: {
        height: 400,
    },

    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height:'100%'
    },

    logoStyle: {
        alignSelf: 'center',
        height: metrics.width * 0.15,
        width: metrics.width * 0.32,
        marginTop: 30,
    },

    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: text.fontFamily.poppinsBold,
        margin: 30,
    },

    activeButton: { 
        alignSelf: 'center',
        borderRadius: dimensions.btnBorderRadiusGlobal,
        padding: dimensions.btnPaddingGlobal,
        width: metrics.width - 60,
        backgroundColor: colors.white,
        marginTop: metrics.height * 0.1,  
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

    infoStyle: {    
        color:'#fff',
        fontWeight:'300', 
        fontSize:size.regular,
        fontFamily: fontFamily.poppinsRegular, 
        textAlign:'left',
        marginTop: metrics.height * 0.1,  
        marginHorizontal: 30, 
    },

    contentStyle: {   
        color:'#fff',
        fontWeight:'300', 
        fontSize:size.regular,
        fontFamily: fontFamily.poppinsRegular, 
        textAlign:'left',
        marginTop: metrics.height * 0.06,  
        marginHorizontal: 30,  
    },

    activeButtonText: {
        textAlign: 'center',
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        color: colors.azure, 
    },  

    activateContainer:{
        padding: 0
    },

    titleStyle: {   
        color:'#fff',
        fontWeight:'400', 
        fontSize:size.xsLarge,
        fontFamily: fontFamily.poppinsRegular,
        alignSelf: 'center',
        textAlign:'center',
        marginTop: metrics.height * 0.05, 
        marginHorizontal: 30,
        lineHeight:36,
    },
});

export default style;
