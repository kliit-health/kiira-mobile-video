import { StyleSheet } from 'react-native';
import metrics from '~/utils/metrices';
import { text, colors } from '~/utils/constants';
import metrices from '~/utils/metrices';
import { color } from 'react-native-reanimated';

let parentPaddingValue = metrics.width * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = metrics.width * 0.03;
let childPadding = parentPadding + childPaddingValue * 2;

export const AVATAR_SIZE = 111;

const style = StyleSheet.create({
    buttonContainer: {
        alignSelf: 'center',
        borderRadius: 20,
        padding: 10,
        width: metrics.width - childPadding,
        backgroundColor: colors.primaryBlue,
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
    avatar:{
        marginTop: 10,
        alignSelf:'center'
    },
    textInput: {
        marginTop:20,
     
        flex:1,
        paddingHorizontal: 15,
        paddingVertical:12,
        borderRadius:5,
       width:'50%',

       marginHorizontal:20,
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.regular,
        backgroundColor: colors.greyLight,
       
    },
    textInput1: {
        marginTop:30,
        paddingHorizontal: 15,
        paddingVertical:12,
        borderRadius:5,
        marginHorizontal:20,
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.regular,
        backgroundColor: colors.greyLight,
      
    },
    textInputOnChange:{
       borderBottomColor:colors.greyDark,
            marginTop:30,
            paddingHorizontal: 15,
            paddingVertical:12,
            borderRadius:5,
            marginHorizontal:20,
            fontFamily: text.fontFamily.poppinsRegular,
            fontSize: text.size.regular,
           backgroundColor: colors.greyLight,  
      
    },
    imageBackground:{
        backgroundColor:colors.white,
         borderRadius:100,
         width:120,
         height:200,
         alignContent:'center',
         alignSelf: 'center'
    },
    stateDropDownContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:10,
        paddingVertical:15,
        marginTop: metrices.height * 0.03,
        borderColor: colors.lightGrey,
        borderWidth: 0.5,
        borderRadius:5,
        backgroundColor:colors.lightGrey,
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
});
export const modifiers = {
    avatar: {
        root: {
             marginTop: 10,
            alignSelf: 'center',
            
           
         
        },
    },
};

export default style;
