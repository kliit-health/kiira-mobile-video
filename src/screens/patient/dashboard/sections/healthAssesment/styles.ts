import {StyleSheet} from 'react-native';
import {text, colors} from '~/utils/constants';
import metrics, {smallScreen} from '~/utils/metrices';
import Constant from '~/utils/constants';

let parentPaddingValue = metrics.width * 0.1;
let parentPadding = parentPaddingValue * 2;
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
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: {height: 13, width: 1},
        shadowOpacity: 1,
        shadowRadius: 10,
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
        elevation: 10,
        overflow: 'visible',
    },

    pending: {
        backgroundColor: 'white',
        width: "92%",
        marginHorizontal: 10,
        borderRadius: 15,
        marginVertical: smallScreen ? 0 : 40,
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
        paddingVertical: smallScreen ? 10 : 20,
        color: colors.white,
    },

    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
        
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },    
        
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },

    buttonOpen: {
      backgroundColor: "#F194FF",
    },
        
    buttonClose: {
      backgroundColor: "#2196F3",
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

    backContainerStyle: {
      alignSelf: 'flex-start',
      marginTop: 3,
    },
        
    bioContainerStyle: {
      paddingLeft: parentPaddingValue,
      paddingRight: parentPaddingValue,
      paddingTop: parentPaddingValue,
      flexDirection: 'column',
      justifyContent: 'center',
      width: metrics.width,
    },     
        
    bioTextStyle: {
      width: metrics.width - parentPadding,
      marginTop: metrics.height * 0.02,
      color: Constant.App.colors.blackColor,
      fontSize: Constant.App.textSize.Medium,
      fontFamily: Constant.App.fontFamily.bodyRegular,
    },     
        
    bioTextStyleBold: {
      width: metrics.width - parentPadding,
      marginTop: metrics.height * 0.02,
      color: Constant.App.colors.blackColor,
      fontSize: Constant.App.textSize.Medium,
      fontFamily: Constant.App.fontFamily.headerBold,
      fontWeight: '500',
    },
        
    bioTitleTextStyle: {
      width: metrics.width - parentPadding,
      color: Constant.App.colors.blackColor,
      fontSize: Constant.App.textSize.xLarge,
      fontFamily: Constant.App.fontFamily.headerBold,
      fontWeight: '500',
    },
        
    closeSheduleContainerStyle: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 3,
    },
        
    dateContainerStyle: {
      borderColor: Constant.App.colors.blueColor,
      borderWidth: 1,
      padding: 8,
      backgroundColor: Constant.App.colors.whiteColor,
      marginVertical: metrics.height * 0.015,
      elevation: 3,
    },
        
    dateSelectedContainerStyle: {
      borderColor: Constant.App.colors.blueColor,
      borderWidth: 1,
      borderRadius: 50,
      padding: 8,
      backgroundColor: Constant.App.colors.blueColor,
      marginVertical: metrics.height * 0.015,
      elevation: 3,
    },
        
    dateTextStyle: {
      textAlign: 'center',
      color: Constant.App.colors.blackColor,
      width: 18,
      height: 18,
      elevation: 3,
      fontSize: 14
    },
        
    dateSelectedTextStyle: {
      textAlign: 'center',
      color: Constant.App.colors.whiteColor,
      width: 18,
      height: 18,
      elevation: 3,
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
    },
        
    dateTimeSlotTextStyle: {
      width: 80,
      textAlign: 'center',
      fontSize: smallScreen  ? Constant.App.textSize.Small : Constant.App.textSize.Medium,
      fontFamily: Constant.App.fontFamily.bodyRegular,
      color: Constant.App.colors.blueColor,
    },
        
    dateTimeSelectedSlotTextStyle: {
      width: 80,
      textAlign: 'center',
      fontSize: smallScreen  ? Constant.App.textSize.Small : Constant.App.textSize.Medium,
      fontFamily: Constant.App.fontFamily.bodyRegular,
      color: Constant.App.colors.whiteColor,
    },

    dow: {
      textAlign: 'center',
      color: Constant.App.colors.blackColor,
      width: 30,
      height: 30,
      elevation: 3,
      fontSize: 14,
      marginBottom: smallScreen ? 50 : 40, 
    },

    dowSelect: {
      color: Constant.App.colors.blueColor
    },
        
    expertDetailsCard: {
      width: metrics.width,
    },
        
    expertIsOffline: {
      width: 18,
      height: 18,
      top: 40,
      left: 20,
      borderRadius: 8,
      backgroundColor: Constant.App.colors.grayColor,
      position: 'absolute',
    },
        
    expertIsOnline: {
      width: 18,
      height: 18,
      top: 40,
      left: 20,
      borderRadius: 8,
      backgroundColor: Constant.App.colors.greenColor,
      position: 'absolute',
    },
        
    expertIsPrescriber: {
      flexDirection: 'row',
    },
        
    expertImage: {
      width: 100,
      height: 100,
      borderRadius: 60,
      borderWidth: 2,
      borderColor: Constant.App.colors.blueColor,
      margin: 10
    },
        
    expertImageContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      zIndex: 1,
    },
        
    expertName: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
        
    expertNameTextStyle: {
      color: Constant.App.colors.blackColor,
      fontSize: 35,
      fontFamily: Constant.App.fontFamily.bodyRegular,
    },
        
    expertPrescriberImage: {
      width: 20,
      height: 20,
    },
        
    expertPrescriberTextStyle: {
      color: Constant.App.colors.blueColor,
      marginLeft: 10,
    },
        
    expertProfession: {
      flexDirection: 'row',
      marginVertical: 5,
    },
        
    expertProfessionTextStyle: {
      fontSize: Constant.App.textSize.xxlarge,
      color: Constant.App.colors.blueGrey,
      marginRight: 10,
    },
        
    expertRatingImage: {
      width: 20,
      height: 20,
      padding: 5,
    },
        
    expertRatingTextStyle: {
      fontSize: Constant.App.textSize.Large,
      color: Constant.App.colors.blueGrey,
    },
        
    expertInfoParentContainerStyle: {
      backgroundColor: Constant.App.colors.whiteColor,
      paddingLeft: parentPaddingValue * 0.2,
      paddingRight: parentPaddingValue * 0.2,
      paddingBottom: parentPaddingValue * 0.2,
      paddingTop: parentPaddingValue * 0.2,
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: metrics.width,
    },
        
    expertInfoProfessionTextStyle: {
      color: Constant.App.colors.blackColor,
      fontSize: Constant.App.textSize.Small,
      fontFamily: Constant.App.fontFamily.bodyRegular,
      fontWeight: '200',
    },
        
    hoursContainerStyle: {
      padding: parentPaddingValue,
      flexDirection: 'column',
      justifyContent: 'center',
      width: metrics.width,
      marginBottom: 70,
    },
        
    parentContainerStyle: {
      paddingTop: 35,
      backgroundColor: Constant.App.colors.whiteColor,
      flexDirection: 'column',
    },
        
    phoneNumberTextStyleBold: {
      color: Constant.App.colors.blueColor,
      fontSize: Constant.App.textSize.Medium,
      fontFamily: Constant.App.fontFamily.bodyRegular,
    },
  
    titleContainerStyle: {
      backgroundColor: Constant.App.colors.whiteColor,
      padding: titlePaddingValue,
      flexDirection: 'column',
      width: metrics.width,
      alignItems: 'center',
      justifyContent: 'center',
    },
        
    availability: {
      fontSize: Constant.App.textSize.Large,
      fontWeight: '500',
      marginLeft: -70,
      marginTop: 20,
  
      width: metrics.width,
    },
  
    noAvailability: {
      fontSize: Constant.App.textSize.Medium,
      fontWeight: '500',
      marginLeft: -70,
      marginTop: 10,
      width: metrics.width,
    },
  
    myRecentExpertContainerStyle: {
      flexDirection: 'column',
      paddingLeft: parentPaddingValue + 4,
      paddingRight: (parentPaddingValue + 4) * 0.5,
      backgroundColor: 'white',
      borderRadius: 15,
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

    fillOutButton: {
      borderColor: Constant.App.colors.blueColor,
      borderWidth: 1,
      borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
      padding: Constant.App.dimensions.btnPaddingGlobal,
      width: metrics.width * 0.5,
      height: smallScreen ? 35 : 45,
      backgroundColor: Constant.App.colors.whiteColor,
    },
  
    doneButton: {
      justifyContent: 'center',
      borderColor: Constant.App.colors.blueColor,
      borderWidth: 1,
      borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
      padding: Constant.App.dimensions.btnPaddingGlobal,
      width: metrics.width * 0.5,
      height: smallScreen ? 35 : 45,
      backgroundColor: Constant.App.colors.blueColor,
      marginTop: 10
    },
  
    fillOutButtonText: {
      textAlign: 'center',
      width: metrics.width * 0.45,
      height: smallScreen ? 12 : 15,
      fontSize: smallScreen ? Constant.App.textSize.Medium : Constant.App.textSize.Large,
      fontFamily: Constant.App.fontFamily.bodyRegular,
      color: Constant.App.colors.blueColor,
    },
        
    doneButtonText: {
      textAlign: 'center',
      width: metrics.width * 0.45,
      height: smallScreen ? 12 : 15,
      fontSize: smallScreen ? Constant.App.textSize.Medium : Constant.App.textSize.Large,
      fontFamily: Constant.App.fontFamily.bodyRegular,
      color: Constant.App.colors.whiteColor,
    },
  
    sheduleContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      height: smallScreen ? metrics.height * 0.85 : metrics.height * 0.75,
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      backgroundColor: 'white',
      width: metrics.width,
      padding: 60,
      borderRadius: 12,
      borderColor: 'lightgrey',
      borderWidth: 1,
      height: 40,
      shadowOffset: {width: 0, height: 2},
      shadowColor: '#000000',
      shadowOpacity: 1,
      shadowRadius: 7,
    },
        
    showSheduleContainer: {
      height: smallScreen ? metrics.height * 0.85 : metrics.height * 0.75,
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      backgroundColor: 'white',
      width: metrics.width * .95,
      padding: 5,
      borderRadius: 12,
      borderColor: 'lightgrey',
      borderWidth: 1,
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
    },

    heading: {
      marginTop: smallScreen ? metrics.height * 0.01 : metrics.height * 0.05,
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
    },

    assessmentText: {
      fontSize: smallScreen ? text.size.small : text.size.medium,
      fontFamily: text.fontFamily.poppinsLight,
      marginHorizontal: 10,
      marginBottom: 10,
    },

    appointmentTimesContainer: {
      height: smallScreen ? "55%" : "60%"
    }

});