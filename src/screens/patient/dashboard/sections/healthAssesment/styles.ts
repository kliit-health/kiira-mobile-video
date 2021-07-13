import {StyleSheet} from 'react-native';
import {text, colors} from '~/utils/constants';
import metrics, {smallScreen, IS_ANDROID} from '~/utils/metrices';
import Constant from '~/utils/constants';

let titlePaddingValue = metrics.width * 0.05;


export default StyleSheet.create({
    actionItem: {
        marginTop: smallScreen ? 0 : 5,
        fontSize: smallScreen ? text.size.Large : 17,
        fontFamily: smallScreen ? text.fontFamily.poppinsRegular : text.fontFamily.poppinsLight,
    },

    actionItems: {
        alignItems: "flex-start",
        padding: smallScreen ? 10 : 20
    },

    arrow: {
        width: 20,
        height: 40,
        transform: [{ rotate: '90deg' }],
    },

    complete: {
        backgroundColor: 'white',
        width: "92%",
        marginHorizontal: 10,
        borderRadius: 15,
        marginVertical: smallScreen ? 0 : 40,
        shadowOffset: {width: 0, height: 4},
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 7,
        elevation: 10,
        overflow: 'visible',
    },

    completeTitle: {
        fontSize: smallScreen ? text.size.Large : text.size.xLarge,
        fontFamily: smallScreen ? text.fontFamily.poppinsRegular : text.fontFamily.poppinsLight,
        marginHorizontal: smallScreen ? 5 : 10,
        paddingHorizontal: 20,
        paddingVertical: smallScreen ? 5 : 20,
    },

    completeItem: {
        alignItems: "center",
    },

    completeText: { 
        marginTop: 5,
        textAlign: "center",
        fontSize: smallScreen ? text.size.small : text.size.Medium,
        fontFamily: text.fontFamily.poppinsLight,
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    dayContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },

    date: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: metrics.width * .15,
        marginVertical: smallScreen ? 10 : 20,
    },

    iconContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingBottom: 20
    },

    firstAvaliable: {
      fontSize: Constant.App.textSize.Medium,
      marginTop: 10,
      alignSelf: 'center',
    },
  
    firstAvaliableContainer: {
      flexDirection: 'row',
      borderTopWidth: 1,
      borderColor: 'grey',
      paddingLeft: 50,
      paddingRight: 50,
      alignSelf: 'center',
    },

    newUser: {
        backgroundColor: colors.purple,
        width: "92%",
        borderRadius: 15,
        marginHorizontal: 5,
        marginVertical: smallScreen ? 0 : 40,
        shadowOffset: {width: 0, height: 4},
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 7,
        elevation: 10,
        overflow: 'visible',
    },

    pending: {
        backgroundColor: 'white',
        width: "92%",
        marginHorizontal: 10,
        borderRadius: 15,
        marginVertical: smallScreen ? 0 : 40,
        shadowOffset: {width: 0, height: 4},
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 7,
        elevation: 10,
        overflow: 'visible',
    },

    pendingIcon: {
        marginLeft: 20,
        marginTop: 20
    },

    pendingTitle: {
        fontSize: text.size.xLarge,
        fontFamily: text.fontFamily.poppinsLight,
        paddingHorizontal: 20,
        paddingTop: 20,
    },

    pendingSubTitle: {
        color: colors.purple,
        fontSize: text.size.Small,
        fontFamily: text.fontFamily.poppinsSemiBold,
        paddingHorizontal: 20,
        paddingTop: 5,
    },

    title: {
        fontSize: smallScreen ? 17 : text.size.xLarge,
        fontFamily: text.fontFamily.poppinsRegular,
        alignSelf: 'center',
        paddingHorizontal: 20,
        paddingVertical: smallScreen ? 10 : 15,
        color: colors.white,
    },

    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },   
    
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
        
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },    
        
    dateContainerStyle: {
      borderColor: Constant.App.colors.blueColor,
      borderWidth: 1,
      padding: 8,
      backgroundColor: Constant.App.colors.whiteColor,
      marginVertical: metrics.height * 0.015,
      elevation: 1,
    },
        
    dateSelectedContainerStyle: {
      borderColor: Constant.App.colors.blueColor,
      borderWidth: 1,
      borderRadius: 50,
      padding: 8,
      backgroundColor: Constant.App.colors.blueColor,
      marginVertical: metrics.height * 0.015,
      elevation: 1,
    },
        
    dateTextStyle: {
      textAlign: 'center',
      color: Constant.App.colors.blackColor,
      width: 18,
      height: 18,
      elevation: 1,
      fontSize: 14
    },
        
    dateSelectedTextStyle: {
      textAlign: 'center',
      color: Constant.App.colors.whiteColor,
      width: 18,
      height: 18,
      elevation: 1,
      fontSize: 14
    },
        
    dateTimeSlotContainerStyle: {
      flexDirection: 'row',
      justifyContent:  'center',
      borderColor: Constant.App.colors.blueColor,
      borderWidth: 1,
      borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
      padding: Constant.App.dimensions.btnPaddingGlobal,
      width: smallScreen ? metrics.width * 0.25 : metrics.width * 0.22,
      height: 40,
      backgroundColor: Constant.App.colors.whiteColor,
      marginTop: metrics.height * 0.01,
      margin: 5,
    },
        
    dateTimeSelectedSlotContainerStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      borderColor: Constant.App.colors.blueColor,
      borderWidth: 1,
      borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
      padding: Constant.App.dimensions.btnPaddingGlobal,
      width: smallScreen ? metrics.width * 0.25 : metrics.width * 0.22,
      height: 40,
      backgroundColor: Constant.App.colors.blueColor,
      marginTop: metrics.height * 0.01,
      margin: 5,
    },
        
    dateTimeSlotTextStyle: {
      width: 80,
      height: 40,
      textAlign: 'center',
      fontSize: smallScreen  ? Constant.App.textSize.Small : Constant.App.textSize.Medium,
      fontFamily: Constant.App.fontFamily.bodyRegular,
      color: Constant.App.colors.blueColor,
    },
        
    dateTimeSelectedSlotTextStyle: {
      width: 80,
      height: 40,
      textAlign: 'center',
      fontSize: smallScreen  ? Constant.App.textSize.Small : Constant.App.textSize.Medium,
      fontFamily: Constant.App.fontFamily.bodyRegular,
      color: Constant.App.colors.whiteColor,
    },

    dow: {
      textAlign: 'center',
      color: Constant.App.colors.blackColor,
      width: 35,
      height: 30,
      elevation: 1,
      fontSize: 14,
      marginBottom: smallScreen ? 50 : 40, 
    },

    dowSelect: {
      color: Constant.App.colors.blueColor
    },
  
    titleContainerStyle: {
      backgroundColor: Constant.App.colors.whiteColor,
      padding: titlePaddingValue,
      flexDirection: 'column',
      width: metrics.width,
      alignItems: 'center',
      justifyContent: 'center',
    },
        
    confirmButton: {
      borderColor: Constant.App.colors.blueColor,
      borderWidth: 1,
      borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
      padding: Constant.App.dimensions.btnPaddingGlobal,
      width: metrics.width * 0.5,
      height: 45,
      backgroundColor: Constant.App.colors.whiteColor,
      marginTop: 10
    },
  
    confirmButtonSelected: {
      justifyContent: 'center',
      borderColor: Constant.App.colors.blueColor,
      borderWidth: 1,
      borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
      padding: Constant.App.dimensions.btnPaddingGlobal,
      width: metrics.width * 0.5,
      height: 45,
      backgroundColor: Constant.App.colors.blueColor,
      marginTop: 10
    },
  
    confirmButtonSelectedText: {
      textAlign: 'center',
      fontSize: Constant.App.textSize.Normal,
      fontFamily: Constant.App.fontFamily.bodyRegular,
      color: Constant.App.colors.whiteColor,
    },
        
    confirmButtonText: {
      textAlign: 'center',
      fontSize: Constant.App.textSize.Normal,
      fontFamily: Constant.App.fontFamily.bodyRegular,
      color: Constant.App.colors.blueColor,
    },

    expertImage: {
      width: smallScreen ? 100 : 120,
      height: smallScreen ? 100 : 120,
      borderRadius: 60,
      borderWidth: 2,
      borderColor: Constant.App.colors.blueColor,
      margin: 10
    },

    fillOutButton: {
      borderColor: Constant.App.colors.blueColor,
      borderWidth: 1,
      borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
      padding: Constant.App.dimensions.btnPaddingGlobal,
      width: metrics.width * 0.85,
      height: smallScreen ? 35 : 45,
      backgroundColor: Constant.App.colors.whiteColor,
    },
  
    doneButton: {
      justifyContent: 'center',
      borderColor: Constant.App.colors.blueColor,
      borderWidth: 1,
      borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
      padding: Constant.App.dimensions.btnPaddingGlobal,
      width: metrics.width * 0.85,
      height: smallScreen ? 35 : 45,
      backgroundColor: Constant.App.colors.blueColor,
      marginTop: 10
    },
  
    fillOutButtonText: {
      textAlign: 'center',
      width: metrics.width * 0.85,
      height: smallScreen ? 15 : 20,
      fontSize: smallScreen ? Constant.App.textSize.Medium : Constant.App.textSize.Large,
      fontFamily: Constant.App.fontFamily.bodyRegular,
      color: Constant.App.colors.blueColor,
    },
        
    doneButtonText: {
      textAlign: 'center',
      width: metrics.width * 0.85,
      height: smallScreen ? 15 : 20,
      fontSize: smallScreen ? Constant.App.textSize.Medium : Constant.App.textSize.Large,
      fontFamily: Constant.App.fontFamily.bodyRegular,
      color: Constant.App.colors.whiteColor,
    },
        
    showSheduleContainer: {
      height: metrics.height,
      marginTop: IS_ANDROID ? 0 : 40,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: "flex-start",
      backgroundColor: 'white',
      width: metrics.width,
      shadowOffset: {width: 0, height: 2},
      shadowColor: '#000000',
      shadowOpacity: 1,
      shadowRadius: 7,
    },
  
    timeSlotContainerStyle: {
      borderColor: Constant.App.colors.blueColor,
      borderWidth: 1,
      borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
      padding: Constant.App.dimensions.btnPaddingGlobal,
      width: metrics.width * 0.26,
      height: 40,
      backgroundColor: Constant.App.colors.whiteColor,
      marginTop: metrics.height * 0.02,
      marginRight: 15,
      margin: 20
    },
  
    timeSlotTextStyle: {
      textAlign: 'center',
      fontSize: Constant.App.textSize.Normal,
      fontFamily: Constant.App.fontFamily.bodyRegular,
      color: Constant.App.colors.blueColor,
    },

    timeSlotContainer: {
      flex: 1,
      borderColor: 'black',
      borderWidth: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      marginBottom: 20
    },

    dateSelect: {
      fontSize: Constant.App.textSize.Medium,
      color: Constant.App.colors.blueColor,
    },

    subHeader: {
      alignSelf: 'flex-start',
      justifyContent: 'center',
      marginBottom: 10
    },

    confirmContainer: {
      width: metrics.width * 0.90,
      backgroundColor: "white",
      flexDirection: "row",
      justifyContent: "center",
      shadowColor: 'rgba(0,0,0, .4)',
      shadowOffset: {height: -10, width: 2},
      shadowOpacity: 0.15,
      shadowRadius: 10,
      marginBottom: 15,
    },

    heading: {
      marginTop: smallScreen ? metrics.height * 0.01 : metrics.height * 0.05,
      marginHorizontal: 20,
      fontSize: smallScreen ? 17 : text.size.xLarge,
      fontFamily: text.fontFamily.poppinsMedium,
      textAlign: "center",
    },

    expertTitle: {
      fontSize: smallScreen ? 17 : text.size.xLarge,
      fontFamily: text.fontFamily.poppinsLight,
      textAlign: "center",
    },

    assessmentDate: {
      fontSize: smallScreen ? 17 : text.size.xLarge,
      fontFamily: text.fontFamily.poppinsRegular,
      textAlign: "center",
      marginVertical: smallScreen ? 5 : 10,
    },

    assessmentText: {
      fontSize: smallScreen ? text.size.small : IS_ANDROID ? text.size.medium : text.size.large,
      fontFamily: text.fontFamily.poppinsLight,
      marginHorizontal: smallScreen ? 10 : 20,
      marginVertical: smallScreen ? 5 : 10,
    },

    appointmentTimesContainer: {
      height: smallScreen ? "55%" : "60%"
    },

    buttonContainer: {
      flex: 1,
      marginTop: 10
    }

});