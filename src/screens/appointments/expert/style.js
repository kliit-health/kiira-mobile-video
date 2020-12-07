import {StyleSheet} from 'react-native';
import Constant from '../../../utils/constants';
import metrics from '../../../utils/metrices';
import {getStatusBarHeight} from '../../../components/iPhoneXHelper';
import metrices from '../../../utils/metrices';

let parentPaddingValue = metrics.DEVICE_WIDTH * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = metrics.DEVICE_WIDTH * 0.03;
var childPadding = parentPadding + childPaddingValue * 2;

export const AVATAR_SIZE = 111;

const styles = StyleSheet.create({
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
    width: metrics.DEVICE_WIDTH,
    // marginTop: getStatusBarHeight(),
  },

  creditButtonStyle: {
    marginLeft: -9,
    marginTop: 14,
    width: metrics.DEVICE_WIDTH * 0.49,
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

  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: parentPaddingValue * 0.5,
    backgroundColor: Constant.App.colors.whiteColor,
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
    marginTop: metrics.DEVICE_WIDTH * 0.1,
    marginBottom: metrics.DEVICE_WIDTH * 0.1,
  },

  logoutTextStyle: {
    textAlign: 'center',
    paddingTop: 10,
    color: Constant.App.colors.redColorLogout,
    fontSize: Constant.App.textSize.xLarge,
    width: metrics.DEVICE_WIDTH,
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
    width: metrics.DEVICE_WIDTH * 0.95,
    height: 425,
    borderRadius: 15,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
    // margin: 15,
  },

  parentContainerStyle: {
    // marginBottom: 100,
  },

  profileImageParentContainerStyle: {
    flexDirection: 'column',
  },

  profileInfoParentContainerStyle: {
    flexDirection: 'column',
    alignSelf: 'center',
    width: metrics.DEVICE_WIDTH - AVATAR_SIZE - parentPadding,
  },

  titleTextStyle: {
    textAlign: 'left',
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.headerBold,
  },

  expertImage: {
    width: 120,
    height: 120,
    padding: 2,
    borderRadius: 60,
    borderWidth: 2,
    margin: 5,
    borderColor: Constant.App.colors.blueColor,
  },

  expertImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
    zIndex: 1,
  },

  expertName: {
    flexDirection: 'row',
    alignItems: 'center',
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
    justifyContent: 'center',
    marginVertical: 5,
  },

  expertProfessionTextStyle: {
    fontSize: Constant.App.textSize.xxlarge,
    color: Constant.App.colors.blueGrey,
    marginRight: 10,
  },

  expertNameTextStyle: {
    flex: 1,
    marginTop: metrics.DEVICE_HEIGHT * 0.025,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.bodyRegular,
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

  expertDetailsCard: {
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
    width: metrics.DEVICE_WIDTH - childPadding,
    backgroundColor: Constant.App.colors.whiteColor,
    marginTop: metrics.DEVICE_HEIGHT * 0.01,
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
    width: metrics.DEVICE_WIDTH - childPadding,
    backgroundColor: Constant.App.colors.blueColor,
    marginTop: metrics.DEVICE_HEIGHT * 0.03,
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

  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 30,
    paddingBottom: 200,
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
    width: metrics.DEVICE_WIDTH,
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
    marginVertical: metrics.DEVICE_HEIGHT * 0.015,
  },

  dateSelectedContainerStyle: {
    alignSelf: 'center',
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 1,
    borderRadius: 50,
    padding: 8,
    backgroundColor: Constant.App.colors.blueColor,
    marginVertical: metrics.DEVICE_HEIGHT * 0.015,
  },

  dateTextStyle: {
    textAlign: 'center',
    width: 18,
  },

  dateSelectedTextStyle: {
    textAlign: 'center',
    color: Constant.App.colors.whiteColor,
    width: 18,
  },

  dateTimeSlotContainerStyle: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 1,
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrics.DEVICE_WIDTH * 0.28,
    height: 44,
    backgroundColor: Constant.App.colors.whiteColor,
    marginTop: metrics.DEVICE_HEIGHT * 0.02,
    marginRight: 5,
  },

  dateTimeSelectedSlotContainerStyle: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 1,
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrics.DEVICE_WIDTH * 0.28,
    height: 44,
    backgroundColor: Constant.App.colors.blueColor,
    marginTop: metrics.DEVICE_HEIGHT * 0.02,
    marginRight: 5,
  },

  dateTimeSlotTextStyle: {
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.blueColor,
  },

  dateTimeSelectedSlotTextStyle: {
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.whiteColor,
  },

  recentChatContainerStyle: {
    padding: parentPaddingValue,
    flexDirection: 'row',
    backgroundColor: Constant.App.colors.whiteColor,
    alignSelf: 'center',
    borderRadius: 20,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
    padding: 15,
    width: metrics.DEVICE_WIDTH * 0.95,
  },

  resolveContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    // width: metrics.DEVICE_WIDTH,
    // padding: 40,
  },

  recentChatParentContainerStyle: {
    flexDirection: 'column',
    backgroundColor: Constant.App.colors.whiteColor,
    // alignSelf: 'center',
    backgroundColor: 'white',
    // width: metrics.DEVICE_WIDTH,
    marginVertical: 20,
  },

  userInfoContainerResolvedChatStyle: {
    flexDirection: 'column',
    width: metrics.DEVICE_WIDTH - parentPadding - 90,
    marginLeft: 10,
    justifyContent: 'center',
  },

  userInfoContainerStyle: {
    flexDirection: 'column',
    width: 220,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
  },

  userInfoTextBoldStyle: {
    fontSize: Constant.App.textSize.Large,
    color: Constant.App.colors.blackColor,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontWeight: '400',
  },

  userInfoTextStyle: {
    fontSize: Constant.App.textSize.Normal,
    color: Constant.App.colors.whiteColor,
    fontWeight: '200',
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  timeContainer: {
    backgroundColor: Constant.App.colors.pinkColor,
    marginLeft: 50,
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    padding: 5,
  },

  header: {
    width: metrics.DEVICE_WIDTH,
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

  searchBar: {
    alignSelf: 'center',
    width: metrics.DEVICE_WIDTH * 0.75,
    backgroundColor: Constant.App.colors.greyBgAsk,
    margin: 5,

    backgroundColor: 'transparent',
    borderWidth: 0, //no effect
    shadowColor: 'transparent', //no effect
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
});

export default styles;
