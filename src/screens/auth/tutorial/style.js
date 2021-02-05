import {Dimensions, StyleSheet} from 'react-native';
import metrices from '../../../utils/metrices';
import Constant from '../../../utils/constants';

const styles = StyleSheet.create({
  bannerImageStyle: {
    height: metrices.DEVICE_HEIGHT * 0.91,
    width: Dimensions.get('window').width,
  },

  buttonContainerStyle: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: metrices.DEVICE_HEIGHT * 0.15,
    marginBottom: 20,
    backgroundColor: Constant.App.colors.whiteColor,
  },

  containerStyle: {
    flex: 1,
    backgroundColor: Constant.App.whiteColor,
  },

  loginButtonStyle: {
    padding: 10,
    width: metrices.DEVICE_WIDTH * 0.75,
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Constant.App.colors.whiteColor,
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 1,
  },

  loginButtonTextStyle: {
    fontFamily: Constant.App.fontFamily.bodyRegular,
    fontSize: Constant.App.textSize.Normal,
    color: Constant.App.colors.blueColor,
    textAlign: 'center',
  },

  sliderViewStyle: {
    height: metrices.DEVICE_HEIGHT * 0.85,
    width: metrices.DEVICE_WIDTH,
  },

  verifyButtonStyle: {
    margin: 12,
    padding: 10,
    width: metrices.DEVICE_WIDTH * 0.75,
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Constant.App.colors.blueColor,
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 1,
  },

  verifyButtonTextStyle: {
    fontFamily: Constant.App.fontFamily.bodyRegular,
    fontSize: Constant.App.textSize.Normal,
    color: Constant.App.colors.whiteColor,
    textAlign: 'center',
  },
});

export default styles;
