import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'components/iPhoneXHelper';
import metrics, {smallScreen} from 'utils/metrices';
import Constant from 'utils/constants';

let parentPaddingValue = metrics.width * 0.1;
let parentPadding = parentPaddingValue * 2;
let titlePaddingValue = metrics.width * 0.05;

const styles = StyleSheet.create({
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

  dateTextStyle: {
    textAlign: 'center',
    color: Constant.App.colors.blackColor,
    width: 18,
    elevation: 3,
  },

  dateSelectedTextStyle: {
    textAlign: 'center',
    color: Constant.App.colors.whiteColor,
    width: 18,
    elevation: 3,
  },

  dateTimeSlotContainerStyle: {
    flexDirection: 'row',
    justifyContent: smallScreen ? 'flex-start' : 'center',
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 1,
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrics.width * 0.26,
    height: 40,
    backgroundColor: Constant.App.colors.whiteColor,
    marginTop: metrics.height * 0.01,
  },

  dateTimeSelectedSlotContainerStyle: {
    flexDirection: 'row',
    justifyContent: smallScreen ? 'flex-start' : 'center',
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 1,
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrics.width * 0.26,
    height: 40,
    backgroundColor: Constant.App.colors.blueColor,
    marginTop: metrics.height * 0.01,
  },

  dateTimeSlotTextStyle: {
    fontSize: Constant.App.textSize.Medium,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.blueColor,
  },

  dateTimeSelectedSlotTextStyle: {
    fontSize: Constant.App.textSize.Medium,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.whiteColor,
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
    width: smallScreen ? 80 : 100,
    height: smallScreen ? 80 : 100,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: Constant.App.colors.blueColor,
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

  expertNameTextStyle: {
    marginTop: metrics.height * 0.025,
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
    marginTop: getStatusBarHeight(),
    backgroundColor: Constant.App.colors.greyBgAsk,
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

  noContainerStyle: {
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 1,
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrics.width * 0.5,
    height: 40,
    backgroundColor: Constant.App.colors.whiteColor,
    marginBottom: 60,
  },

  noSelectedContainerStyle: {
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 1,
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrics.width * 0.5,
    height: 40,
    backgroundColor: Constant.App.colors.blueColor,
    marginBottom: 60,
  },

  noSelectedTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.whiteColor,
  },

  noTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.blueColor,
  },

  sheduleContainer: {
    flexDirection: 'column',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: metrics.width,
    padding: 60,
    backgroundColor: 'white',
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
    flexDirection: 'column',
    height: metrics.height,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: metrics.width,
    padding: smallScreen ? 5 : 20,
    backgroundColor: 'white',
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
});

export default styles;
