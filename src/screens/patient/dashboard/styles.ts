import { StyleSheet } from 'react-native';
import Constant, { colors, text } from '~/utils/constants';
import metrices from '~/utils/metrices';

export const style = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrices.width * 0.9,
    backgroundColor: colors.blue,
    marginTop: metrices.height * 0.05,
  },

  buttonText: {
    textAlign: 'center',
    fontSize: text.size.regular,
    fontFamily: text.fontFamily.poppinsRegular,
    color: colors.white,
  },
});
