import {StyleSheet} from 'react-native';
import Constant from '~/utils/constants';
import metrics from '~/utils/metrices';
import {text, colors} from '~/utils/constants';

let parentPaddingValue = metrics.width * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = metrics.width * 0.03;
var childPadding = parentPadding + childPaddingValue * 2;

export const AVATAR_SIZE = 111;

export default StyleSheet.create({
  cancelTextStyle: {
    textAlign: 'left',
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Medium,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Constant.App.colors.offWhiteColor,
    width: metrics.width,
  },

  creditButtonStyle: {
    marginLeft: -9,
    marginTop: 14,
    width: metrics.width * 0.49,
    height: 44,
    borderRadius: 22,
    backgroundColor: Constant.App.colors.whiteColor,
  },

  creditButtonTextStyle: {
    textAlign: 'center',
    paddingTop: 11,
    fontFamily: Constant.App.fontFamily.avenirMedium,
    fontSize: Constant.App.textSize.Normal,
    color: Constant.App.colors.blueColor,
  },

  creditTextStyle: {
    textAlign: 'left',
    paddingTop: 10,
    color: Constant.App.colors.whiteColor,
    fontSize: Constant.App.textSize.xLarge,
    fontFamily: Constant.App.fontFamily.headerMedium,
    fontWeight: '500',
  },

  genderTextStyle: {
    textAlign: 'left',
    paddingTop: 5,
    color: Constant.App.colors.whiteColor,
    fontSize: Constant.App.textSize.xLarge,
    fontFamily: Constant.App.fontFamily.headerLight,
    fontWeight: '400',
  },

  itemsParentContainerStyle: {
    backgroundColor: Constant.App.colors.whiteColor,
    flexDirection: 'row',
    paddingLeft: parentPaddingValue,
    paddingRight: parentPaddingValue,
    paddingTop: parentPaddingValue * 0.5,
    paddingBottom: parentPaddingValue * 0.5,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1.5,
  },

  itemTextStyle: {
    textAlign: 'left',
    paddingTop: 5,
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  logoutParentContainerStyle: {
    marginTop: metrics.width * 0.1,
    marginBottom: metrics.width * 0.1,
  },

  logoutTextStyle: {
    textAlign: 'center',
    paddingTop: 10,
    color: Constant.App.colors.redColorLogout,
    fontSize: Constant.App.textSize.xLarge,
    width: metrics.width,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  nameTextStyle: {
    textAlign: 'left',
    color: Constant.App.colors.whiteColor,
    fontSize: Constant.App.textSize.xxLarge,
    fontFamily: Constant.App.fontFamily.headerSemiBold,
  },

  myRecentExpertContainerStyle: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: metrics.width * 0.95,
    height: 425,
    borderRadius: 15,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
    // margin: 15,
  },

  profileImageParentContainerStyle: {
    flexDirection: 'column',
  },

  profileInfoParentContainerStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
  },

  noContainerStyle: {
    alignSelf: 'center',
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrics.width - childPadding,
    backgroundColor: Constant.App.colors.whiteColor,
    marginTop: metrics.height * 0.01,
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 1,
  },

  noTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.blueColor,
  },

  yesContainerStyle: {
    alignSelf: 'center',
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrics.width - childPadding,
    backgroundColor: Constant.App.colors.blueColor,
    marginTop: metrics.height * 0.03,
  },

  yesTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.whiteColor,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    zIndex: 1,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  appointViewStyle: { 
    height: metrics.height * 0.6, 
    textAlign: 'center',    
  }, 

  title: { 
    height: metrics.height * 0.5,
    color: colors.black,
    fontSize: 38,
    fontFamily: text.fontFamily.poppinsRegular,
    textAlign: 'center',   
    margin:20,  
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    margin: 30,
  },

  titleContainerStyle: {
    // flex: 1,
    backgroundColor: Constant.App.colors.blueColor,
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.width,
    // height: 200,
    borderRadius: 50,
    overflow: 'hidden',
  },

  titleTextStyle: {
    color: Constant.App.colors.whiteColor,
    fontSize: Constant.App.textSize.xxLarge,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontWeight: '500',
  },

  safeArea: {
    flex: 1,
  },

  dateContainerStyle: {
    alignSelf: 'center',
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 1,
    borderRadius: 50,
    padding: 8,
    backgroundColor: Constant.App.colors.whiteColor,
    marginVertical: metrics.height * 0.015,
    elevation: 3,
  },

  dateSelectedContainerStyle: {
    alignSelf: 'center',
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 1,
    borderRadius: 50,
    padding: 8,
    backgroundColor: Constant.App.colors.blueColor,
    marginVertical: metrics.height * 0.015,
    elevation: 3,
  },

  dateSelectedTextStyle: {
    textAlign: 'center',
    color: Constant.App.colors.whiteColor,
    width: 18,
    elevation: 3,
  },

  dateTextStyle: {
    textAlign: 'center',
    color: Constant.App.colors.blackColor,
    width: 18,
    elevation: 3,
  },

  header: {
    width: metrics.width,
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: Constant.App.colors.blueColor,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },

  headerText: {
    color: Constant.App.colors.whiteColor,
    fontSize: Constant.App.textSize.xxLarge,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontWeight: '500',
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  }, 

  searchBar: {
    alignSelf: 'center',
    width: metrics.width * 0.75,
    backgroundColor: Constant.App.colors.greyBgAsk,
    margin: 5,
    backgroundColor: 'transparent',
    borderWidth: 0, //no effect
    shadowColor: 'transparent', //no effect
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  }, 

  visitContainerStyle: {
    padding: parentPaddingValue,
    flexDirection: 'row',
    backgroundColor: Constant.App.colors.whiteColor,
    alignSelf: 'center',
    width: metrics.width * 0.9,
    overflow: 'visible',
    borderRadius: 20,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
    padding: 15,
  },

  visitParentContainerStyle: {
    flexDirection: 'column',
    backgroundColor: Constant.App.colors.whiteColor,
    alignSelf: 'center',
    backgroundColor: 'white',
    width: metrics.width * 0.9,
    overflow: 'visible',
    marginVertical: 40,
    marginHorizontal: 20,
  },

  userInfo: {
    flexDirection: 'column',
    width: metrics.width * 0.9,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
  },

  userInfoText: {
    fontSize: Constant.App.textSize.Large,
    color: Constant.App.colors.blackColor,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontWeight: '400',
  },

  timeContainer: {
    backgroundColor: Constant.App.colors.pinkColor,
    marginLeft: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    padding: 5,
  },

  timeImage: {
    width: 20,
    height: 20,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  timeTextStyle: {
    fontSize: Constant.App.textSize.Normal,
    color: Constant.App.colors.whiteColor,
    fontWeight: '200',
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },
  appointmentsList: {
    padding: 10,
  },
});

export const modifiers = {
  searchBar: {
    root: {
      marginTop: 20,
    },
  },
  container: {
    safeAreaBottom: {
      height: 0,
    },
  },
};
