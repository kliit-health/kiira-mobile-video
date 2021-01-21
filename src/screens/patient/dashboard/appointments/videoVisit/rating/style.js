import {StyleSheet} from 'react-native';
import Constant from '../../../utils/constants';
import metrics, {smallScreen} from '../../../utils/metrices';
import {getStatusBarHeight} from '../../../components/iPhoneXHelper';
import {text, colors} from '../../../utils/constants';

let parentPaddingValue = metrics.DEVICE_WIDTH * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = metrics.DEVICE_WIDTH * 0.03;
var childPadding = parentPadding + childPaddingValue * 2;

export const AVATAR_SIZE = 111;

const styles = StyleSheet.create({
  heading: {
    backgroundColor: Constant.App.colors.blueColor,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headingText: {
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.whiteColor,
    fontWeight: '700',
  },

  expertImage: {
    width: smallScreen ? 90 : 120,
    height: smallScreen ? 90 : 120,
    borderRadius: 60,
    marginTop: -80,
  },

  expertImageContainer: {
    alignItems: 'center',
  },

  expertText: {
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.blackColor,
    marginVertical: 50,
    alignSelf: 'center',
  },

  modalImage: {
    width: smallScreen ? 90 : 120,
    height: smallScreen ? 90 : 120,
    borderRadius: 60,
  },

  modalImageContainer: {
    alignItems: 'center',
  },

  ratingContainer: {
    marginTop: -30,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    borderColor: Constant.App.colors.whiteColor,
    borderTopWidth: 30,
  },

  ratingStar: {
    marginTop: 20,
    marginBottom: 40,
  },

  modalRatingStarContainer: {
    marginVertical: 40,
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

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;
