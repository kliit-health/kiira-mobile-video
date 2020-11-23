import {StyleSheet} from 'react-native';
import Constant from '../../utils/constants';
import metrics from '../../utils/metrices';
import {getStatusBarHeight} from '../../components/iPhoneXHelper';

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
    marginTop: getStatusBarHeight(),
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
    width: metrics.DEVICE_WIDTH * 0.85,
    height: 425,
    borderRadius: 15,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
    margin: 15,
  },

  parentContainerStyle: {
    flex: 1,
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
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    margin: 30,
  },

  titleContainerStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Constant.App.colors.whiteColor,
    borderBottomColor: Constant.App.colors.offWhiteColor,
    borderBottomWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.DEVICE_WIDTH,
  },

  titleTextStyle: {
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.xxLarge,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontWeight: '500',
  },
});

export default styles;
