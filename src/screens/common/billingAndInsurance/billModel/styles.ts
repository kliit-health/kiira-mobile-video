import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { text, colors } from '~/utils/constants'; 
import metrics, { smallScreen } from '~/utils/metrices'; 

let parentPaddingValue = metrics.width * 0.05;
let parentPadding = parentPaddingValue * 2;

export default StyleSheet.create({ 
    headerStyle:{  
        marginHorizontal: parentPaddingValue,  
        flexDirection:'row', 
    }, 
    dateStyle: { 
        backgroundColor: colors.greyDark,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        justifyContent: 'center',
        textAlign:'center', 
        paddingHorizontal: parentPaddingValue, 
        width: parentPaddingValue + 50
    },
    pastStyle: { 
        backgroundColor: colors.white, 
        justifyContent: 'center',
        borderColor: colors.greyDark, 
        borderWidth: 1,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8, 
        paddingHorizontal: parentPaddingValue,  
        width: metrics.width - parentPadding - parentPaddingValue - 50, 
    },
    monthStyle: {
        textAlign:'center', 
        fontSize: text.size.small, 
        fontFamily: text.fontFamily.poppinsRegular,
        color: colors.white
    },
    dayStyle: {
        textAlign:'center', 
        fontSize: text.size.xxxLarge,
        fontFamily: text.fontFamily.poppinsRegular,
        color: colors.white
    },
    yearStyle: {
        textAlign:'center', 
        fontSize: text.size.small,
        fontFamily: text.fontFamily.poppinsRegular,
        color: colors.white
    },
    pdfStyle:{
        textAlign:'left', 
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        color: colors.azure,
        paddingBottom: metrics.height * 0.01,
        paddingTop: metrics.height * 0.005,
    },
    moneyStyle: {
        textAlign:'left', 
        fontSize: text.size.xsLarge,
        fontFamily: text.fontFamily.poppinsRegular,
        color: colors.black,
        alignSelf:'center',
    },
    timeStyle: {
        textAlign:'center', 
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        color: colors.greyDark,
        alignSelf:'center',
    },
    visitStyle: {
        flexDirection:'row',   
        paddingBottom: metrics.height * 0.005,
        paddingTop: metrics.height * 0.01,
    }
});
