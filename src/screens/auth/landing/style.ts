import {StyleSheet} from 'react-native';
import metrics from '../../../utils/metrices';
import Constant, {text, colors} from '../../../utils/constants';

const styles = StyleSheet.create({
  bannerImageStyle: {
    height: metrics.height * 0.91,
    width: metrics.width,
  },

  buttonContainerStyle: {
    alignItems: 'center',
    height: metrics.height * 0.18,
    backgroundColor: colors.white,
  },

  containerStyle: {
    flex: 1,
    backgroundColor: colors.white,
  },

  loginButtonStyle: {
    padding: 10,
    width: metrics.width * 0.75,
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.blue,
    borderWidth: 1,
  },

  loginButtonTextStyle: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.normal,
    color: colors.blue,
    textAlign: 'center',
  },

  sliderViewStyle: {
    height: metrics.height * 0.85,
    width: metrics.width,
  },

  verifyButtonStyle: {
    margin: 12,
    padding: 10,
    width: metrics.width * 0.75,
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
    borderColor: colors.blue,
    borderWidth: 1,
  },

  verifyButtonTextStyle: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.normal,
    color: colors.white,
    textAlign: 'center',
  },
});

export default styles;
