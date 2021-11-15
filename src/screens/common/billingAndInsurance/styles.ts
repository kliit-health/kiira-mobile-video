import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { text, colors } from '~/utils/constants'; 
import metrics, { smallScreen } from '~/utils/metrices'; 

let parentPaddingValue = metrics.width * 0.05;
let parentPadding = parentPaddingValue * 2;

export default StyleSheet.create({ 
    headerStyle:{
        borderBottomColor: colors.greyAccent,
        borderBottomWidth: 1,   
    },
    inputTextParentContainerStyle: {  
        width: metrics.width, 
        paddingTop: metrics.height * 0.01,   
        backgroundColor: colors.white 
    },
    underLineStyle : {
        width: '100%',
        borderBottomColor: colors.greyAccent,
        borderBottomWidth: 1,  
    },
    inputTextContainerStyle: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginLeft: parentPaddingValue,
        marginRight: parentPaddingValue,
        width: metrics.width - parentPadding,
        marginVertical: metrics.height * 0.01, 
    },
    inputEmptyTypeStyle: {
        color: colors.black,
        width:'100%',
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        textAlign: 'left',     
        backgroundColor: colors.greyLight, 
        borderRadius :8,  
        paddingHorizontal: metrics.height * 0.02,    
        paddingTop: metrics.height * 0.015, 
        paddingBottom: metrics.height * 0.015,  
    },
    textStyle: {
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        backgroundColor: colors.white, 
    },
    textEmptyStyle: {
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        fontWeight:'100', 
    },
    titleTextStyle: {
        color: colors.black,
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsMedium, 
        textAlign: 'left',  
    },
    inputTypeStyle : {
        color: colors.black, 
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        textAlign: 'left',     
        backgroundColor: colors.white,  
        paddingHorizontal: metrics.height * 0.02,    
        paddingTop: metrics.height * 0.015, 
        paddingBottom: metrics.height * 0.015,   
    },
    inputEditTypeStyle: {
        color: colors.black, 
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        textAlign: 'left',     
        backgroundColor: colors.white, 
        borderRadius:8,
        borderColor: colors.greyAccent,
        borderWidth: 1,
        paddingHorizontal: metrics.height * 0.02,    
        paddingTop: metrics.height * 0.008, 
        paddingBottom: metrics.height * 0.008,  
    },
    pastBillsContainerStyle: {
        flexDirection: 'column',   
        borderTopColor: colors.greyAccent, 
        borderTopWidth: 1, 
        marginTop: metrics.height * 0.01,   
        height:'100%'
    },
    pastBillsStyle: {
        flexDirection: 'column',   
        borderTopColor: colors.greyAccent, 
        borderTopWidth: 1,  
    },
    pastBillStyle: { 
        fontSize: text.size.xLarge,
        fontFamily: text.fontFamily.poppinsRegular,
        paddingLeft: parentPaddingValue,
        paddingRight: parentPaddingValue,
        paddingTop: metrics.height * 0.02, 
        paddingBottom: metrics.height * 0.02, 
        backgroundColor: colors.babyBlue
    },
    noBillStyle: { 
        fontSize: text.size.xLarge,
        fontFamily: text.fontFamily.poppinsRegular,
        color: colors.greyDark,
        marginTop: metrics.height * 0.06, 
        marginLeft: parentPaddingValue,
        marginRight: parentPaddingValue,
    },
    searchButton: { 
        width: metrics.width - metrics.height * 0.08,
        marginVertical: metrics.height * 0.02,  
        alignSelf: 'center',
        borderRadius: 22,  
         
    },
    buttonContainer:{ 
        padding: smallScreen ? 0 : parentPaddingValue,  
    }
});
