import { StyleSheet } from 'react-native';
import metrics from '~/utils/metrices';
import { text, colors } from '~/utils/constants';
import metrices from '~/utils/metrices';

let parentPaddingValue = metrics.width * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = metrics.width * 0.03;
let childPadding = parentPadding + childPaddingValue * 2;



const style = StyleSheet.create({
    buttonContainer: {
        alignSelf: 'center',
        borderRadius: 20,
        padding: 10,
        width: metrics.width - childPadding,
        backgroundColor: colors.primaryBlue,
        marginTop: metrics.height * 0.005,
    },
   
    disabledButton:{
        alignSelf: 'center',
        borderRadius: 20,
        padding: 10,
        width: metrics.width - childPadding,
        backgroundColor: colors.greyAccent,
        marginTop: metrics.height * 0.01,   
    },
    
    buttonText: {
        textAlign: 'center',
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        color: colors.white,
    },

    container: {
        height:254,
        width:375,
        backgroundColor: colors.babyBlue,
    },

    title:{
        textAlign: 'center',
        fontSize: text.size.large,
        fontFamily: text.fontFamily.poppinsRegular,
    },
    informationText: {
        textAlign: 'center',
        fontSize: text.size.medium,
        fontFamily: text.fontFamily.poppinsRegular,
        margin: 15,
        color:colors.greyDark
    },
    AdditionalInformationText: {
        textAlign: 'center',
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
       marginHorizontal:'3%',
        color:colors.greyDark
    },
    skipText: {
        textAlign: 'center',
        marginTop: metrics.height * 0.08,
        color: colors.primaryBlue,
        fontSize: text.size.large,
        fontFamily: text.fontFamily.poppinsRegular,
        marginBottom: metrics.height * 0.02,
    },
  
    namesTextInput: {
        marginTop:20,
        flex:1,
        paddingHorizontal: 15,
        paddingVertical:10,
        borderRadius:5,
       width:'50%',
       marginHorizontal:'6%',
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.regular,
        backgroundColor: colors.greyLight,
       
    },
    otherTextInput: {
        marginTop:30,
        paddingHorizontal: 15,
        paddingVertical:10,
        marginHorizontal:'6%',
        borderRadius:5,
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.regular,
        backgroundColor: colors.greyLight,
        width:'90%',
      
    },
    nameTextInputOnChange:{
       borderBottomColor:colors.greyAccent,
       borderBottomWidth:1,
       marginTop:20,
       flex:1,
       paddingHorizontal: 15,
       paddingVertical:10,
       borderRadius:5,
       width:'50%',
       marginHorizontal:20,
       fontFamily: text.fontFamily.poppinsRegular,
       fontSize: text.size.regular,
       backgroundColor: colors.white, 
      
    },
    AddEditImage:{
        position: 'absolute',
        right:'1%',
        bottom:'2%'
    },
    imageView:{
        flex:1,
         justifyContent:'center',
         alignItems:'center'
    },
    OtherTextInputOnChange: {
        borderBottomColor:colors.greyAccent,
       borderBottomWidth:1,
        marginTop:30,
        paddingHorizontal: 15,
        paddingVertical:10,
        borderRadius:5,
        marginHorizontal:20,
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.regular,
        backgroundColor: colors.white,
      
    },
    imageBackground:{
        display:'flex',
        backgroundColor:colors.white,
         borderRadius:120,
         width:120,
         height:120,
         justifyContent:'center',
         alignContent:'center',
         alignSelf: 'center',
         padding:20,
         position:'absolute',
         top:-50
    },
    stateDropDownContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:'6%',
        paddingVertical:'3%',
        marginTop: metrices.height * 0.03,
        borderColor: colors.greyAccent,
        borderWidth: 1,
        borderRadius:5,
        width:'90%',
        backgroundColor:colors.white,
    },
    stateDropDownTextStyle: {
        color: colors.greyDark,
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        textAlign: 'left',
        alignSelf: 'center',
        width: metrices.width - parentPadding - metrices.width * 0.05,
    },
    selectedTextStyle: {
        color: colors.black,
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        textAlign: 'left',
        alignSelf: 'center',
        width: metrices.width - parentPadding - metrices.width * 0.05,
    },
    dropDownIconStyle: {   
            height: metrics.width * 0.04,
            width: metrics.width * 0.04,
            opacity:0.3      
    },
    pageNumber:{
        color: colors.greyDark,
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        textAlign: 'center',
        alignSelf: 'center',
        marginTop:20
    }
});

export default style;
