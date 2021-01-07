import {StyleSheet} from 'react-native';
import Constant from '../../../utils/constants';
import metrics from '../../../utils/metrices';

let parentPaddingValue = metrics.DEVICE_WIDTH * 0.1;
export const AVATAR_SIZE = 111;

const styles = StyleSheet.create({
  appointmentContainerStyle: {
    flexDirection: 'column',
    alignSelf: 'center',
    overflow: 'visible',
    width: metrics.DEVICE_WIDTH * 0.9,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Constant.App.colors.offWhiteColor,
  },

  dates: {
    height: 100,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 15,
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

  dateSelectedTextStyle: {
    textAlign: 'center',
    color: Constant.App.colors.whiteColor,
    width: 18,
  },

  dateTextStyle: {
    textAlign: 'center',
    width: 18,
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

  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },

  safeArea: {
    flex: 1,
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

  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 30,
    paddingBottom: 200,
  },

  visitContainerStyle: {
    padding: parentPaddingValue,
    flexDirection: 'row',
    backgroundColor: Constant.App.colors.whiteColor,
    alignSelf: 'center',
    width: metrics.DEVICE_WIDTH * 0.9,
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
    width: metrics.DEVICE_WIDTH * 0.9,
    overflow: 'visible',
    marginVertical: 40,
    marginHorizontal: 20,
  },

  userInfo: {
    flexDirection: 'column',
    width: metrics.DEVICE_WIDTH * 0.9,
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
});

export default styles;
