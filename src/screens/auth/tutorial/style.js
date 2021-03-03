import {StyleSheet} from 'react-native';
import metrices from '../../../utils/metrices';
import Constant, {text, colors} from '../../../utils/constants';

const styles = StyleSheet.create({
  bannerImageStyle: {
    height: metrices.height * 0.91,
    width: metrices.width,
  },

  buttonContainerStyle: {
    alignItems: 'center',
    height: metrices.height * 0.18,
    backgroundColor: colors.white,
  },

  containerStyle: {
    flex: 1,
    backgroundColor: colors.white,
  },

  loginButtonStyle: {
    padding: 10,
    width: metrices.width * 0.75,
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
    height: metrices.height * 0.85,
    width: metrices.width,
  },

  verifyButtonStyle: {
    margin: 12,
    padding: 10,
    width: metrices.width * 0.75,
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
