import {StyleSheet} from 'react-native';
import Constant from '../../../utils/constants';
import {getStatusBarHeight} from '../../../components/iPhoneXHelper';
import metrics from '../../../utils/metrices';
import {text, colors} from '../../../utils/constants';

let parentPaddingValue = metrics.DEVICE_WIDTH * 0.03;
let parentPadding = parentPaddingValue * 2;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: colors.white,
    borderBottomColor: colors.gray,
    borderBottomWidth: 0.3,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Constant.App.colors.offWhiteColor,
  },

  divider: {
    width: 20,
  },

  emptyViewContainerStyle: {
    width: metrics.DEVICE_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  emptyViewTextStyle: {
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.xxLarge,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontWeight: '500',
  },

  itemSeparator: {
    width: metrics.DEVICE_WIDTH,
    height: 1,
    backgroundColor: Constant.App.colors.greyBgAsk,
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
  },

  resolveContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
    width: metrics.DEVICE_WIDTH * 0.95,
  },

  recentChatParentContainerStyle: {
    flexDirection: 'column',
    backgroundColor: Constant.App.colors.whiteColor,
    alignSelf: 'center',
    backgroundColor: 'white',
    marginVertical: 25,
  },

  resolvedChatParentContainerStyle: {
    marginTop: metrics.DEVICE_WIDTH * 0.05,
    width: metrics.DEVICE_WIDTH,
    flexDirection: 'column',
    backgroundColor: Constant.App.colors.whiteColor,
  },

  subtitleContainerStyle: {
    borderBottomColor: Constant.App.colors.greyBgAsk,
    borderBottomWidth: 1,
    width: metrics.DEVICE_WIDTH,
    paddingLeft: metrics.DEVICE_WIDTH * 0.05,
    paddingTop: metrics.DEVICE_WIDTH * 0.03,
    paddingBottom: metrics.DEVICE_WIDTH * 0.03,
  },

  subtitleTextStyle: {
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.headerRegular,
  },

  titleContainerStyle: {
    paddingTop: getStatusBarHeight() + 10,
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

  unreadCountContainerStyle: {
    flexDirection: 'column',
    width: 25,
    height: 25,
    marginTop: 5,
    borderRadius: 12.5,
    backgroundColor: Constant.App.colors.orangeUnreadNotifcationCountColor,
  },

  unreadCountTextStyle: {
    paddingTop: 5,
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    color: Constant.App.colors.whiteColor,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  userInfoContainerResolvedChatStyle: {
    flexDirection: 'column',
    width: metrics.DEVICE_WIDTH - parentPadding - 90,
    marginLeft: 10,
    justifyContent: 'center',
  },

  userInfoContainerStyle: {
    flexDirection: 'column',
    width: metrics.DEVICE_WIDTH - parentPadding - 125,
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    padding: 5,
  },

  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 30,
  },
});

export default styles;
