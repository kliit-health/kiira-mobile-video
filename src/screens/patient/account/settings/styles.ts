import { StyleSheet, Platform } from 'react-native';
import { colors, text } from '~/utils/constants';
import metrices from '~/utils/metrices';
import { getStatusBarHeight } from '~/components/iPhoneXHelper';

let parentPaddingValue = metrices.width * 0.05;
let parentPadding = parentPaddingValue * 2;

const styles = StyleSheet.create({
    birthDayContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: metrices.width - parentPadding,
        marginTop: metrices.height * 0.03,
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 0.5,
        paddingBottom: metrices.height * 0.01,
    },

    birthDayTextStyle: {
        color: colors.black,
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        textAlign: 'left',
        alignSelf: 'center',
        width: metrices.width - parentPadding,
    },

    btnContainerStyle: {
        marginTop: metrices.height * 0.02,
        marginBottom: metrices.height * 0.02,
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 0.5,
        borderTopColor: colors.lightGrey,
        borderTopWidth: 0.5,
        padding: 10,
        backgroundColor: colors.white,
        width: metrices.width,
    },

    btnTextStyle: {
        textAlign: 'center',
        color: colors.primaryBlue,
        fontSize: text.size.large,
        fontFamily: text.fontFamily.poppinsRegular,
    },

    cancelTextStyle: {
        textAlign: 'left',
        color: colors.black,
        fontSize: text.size.medium,
        fontFamily: text.fontFamily.poppinsRegular,
        elevation: 3,
    },

    changeProfileTextStyle: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        textAlign: 'center',
        color: colors.primaryBlue,
        fontSize: text.size.medium,
        fontFamily: text.fontFamily.poppinsRegular,
    },

    container: {
        flex: 1,
         flexDirection: 'column',
        backgroundColor: colors.babyBlue,
        paddingTop: 35,
    },
    headerStyle:{
        borderBottomColor: colors.greyAccent,
        borderBottomWidth: 1, 
        textAlign:'center',

    },

    doneTextStyle: {
        padding: 5,
        textAlign: 'left',
        color: colors.primaryBlue,
        fontSize: text.size.medium,
        fontFamily: text.fontFamily.poppinsRegular,
        elevation: 3,
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
        paddingHorizontal: metrices.height * 0.02,    
        paddingTop: metrices.height * 0.008, 
        paddingBottom: metrices.height * 0.008,  
    },

    dropDownIconStyle: {
        height: metrices.width * 0.04,
        width: metrices.width * 0.04,
    },


    inputTextParentContainerStyle: {
        backgroundColor: colors.white,
        flexDirection: 'column',
        width: metrices.width,
        paddingLeft: parentPaddingValue,
        paddingRight: parentPaddingValue,
        marginTop:30,
        borderBottomColor:colors.greyAccent,
        borderBottomWidth:1
    },
    textStyle: {
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        backgroundColor: colors.white, 
    },
    textEmptyStyle: {
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        fontWeight:'300', 
        color:colors.greyDark
    },

    inputEmptyTypeStyle: {
        color: colors.black,
        width:'100%',
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        textAlign: 'left',     
        backgroundColor: colors.white, 
        borderRadius :8,  
        paddingHorizontal: metrices.height * 0.02,    
        paddingTop: metrices.height * 0.01, 
        paddingBottom: metrices.height * 0.01,
        borderBottomColor:colors.greyAccent,
        borderBottomWidth:1 
       
    },
    listContainer: {
        flexDirection: 'row',
    },
    titleContainer: {
        flexDirection: 'column',
        justifyContent: 'center',

    },
    content: {
        lineHeight: 22,
        color: colors.black,
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        backgroundColor: colors.white, 
    },
    versionListContainer: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        padding: 15,
        paddingVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 1,
    },
    borderStyle: {
        borderColor: colors.greyAccent,
        borderTopWidth:1
    },
  
    inputTextContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: metrices.width - parentPadding,
        marginTop: metrices.height * 0.01,
        backgroundColor:colors.white,
       
      
    },

    inputTextFirstNameContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: (metrices.width - parentPadding) * 0.47,
        paddingBottom: Platform.OS === 'ios' ? metrices.height * 0.01 : 0,
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 0.5,
    },

    inputTypeStyle: {
        color: colors.black,
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        textAlign: 'left',
        width: (metrices.width - parentPadding) * 0.47,
    },

    profileImgViewStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: metrices.width,
        padding: parentPaddingValue,
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 0.5,
    },

    pronounsParentContainerStyle: {
        width: metrices.width,
        backgroundColor: colors.white,
        paddingLeft: parentPaddingValue,
        paddingRight: parentPaddingValue,
        paddingTop: metrices.height * 0.03,
        paddingBottom: metrices.height * 0.03,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 0.5,
    },

    textTitleTextStyle: {
        color: colors.black,
        fontSize: text.size.small,
        fontFamily: text.fontFamily.poppinsLight,
        textAlign: 'left',
        width: metrices.width - parentPadding,
    },

    textContainerStyle: {
        marginTop: metrices.height * 0.01,
        width: metrices.width - parentPadding,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    pronounsTextStyle: {
        paddingLeft: 10,
        color: colors.black,
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        textAlign: 'left',
        width: metrices.width - parentPadding - metrices.width * 0.05,
    },

    pronounsChecboxIconStyle: {
        height: metrices.width * 0.05,
        width: metrices.width * 0.05,
    },

    stateDropDownContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: metrices.width - parentPadding,
        marginTop: metrices.height * 0.03,
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 0.5,
        paddingBottom: metrices.height * 0.01,
    },

    stateDropDownTextStyle: {
        color: colors.black,
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        textAlign: 'left',
        alignSelf: 'center',
        width: metrices.width - parentPadding - metrices.width * 0.05,
    },

    textTextStyle: {
        paddingLeft: 10,
        color: colors.black,
        fontSize: text.size.medium,
        fontFamily: text.fontFamily.poppinsRegular,
        textAlign: 'left',
        width: metrices.width - parentPadding - metrices.width * 0.05,
    },

    titleTextStyle: {
        textAlign: 'center',
        color: colors.black,
        fontSize: text.size.large,
        fontFamily: text.fontFamily.poppinsBold,
    },
});

export default styles;

