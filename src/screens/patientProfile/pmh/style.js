import {StyleSheet} from 'react-native';
import Constant from '../../../utils/constants';
import metrices from '../../../utils/metrices';

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    width: metrices.DEVICE_WIDTH,
    paddingVertical: 60,
    backgroundColor: Constant.App.colors.blueColor,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  headerText: {
    color: Constant.App.colors.whiteColor,
    fontSize: Constant.App.textSize.xxLarge,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontWeight: '500',
    marginLeft: metrices.DEVICE_WIDTH * 0.15,
  },

  input: {
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 5,
    width: metrices.DEVICE_WIDTH * 0.8,
    alignSelf: 'center',
    marginTop: 50,
    height: 200,
    color: 'black',
    padding: 10,
  },

  prevButtonContainerStyle: {
    justifyContent: 'space-around',
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 2,
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrices.DEVICE_WIDTH * 0.3,
    backgroundColor: Constant.App.colors.whiteColor,
    marginTop: metrices.DEVICE_HEIGHT * 0.03,
  },

  prevButtonTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.blueColor,
  },

  nextButtonContainerStyle: {
    justifyContent: 'space-around',
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrices.DEVICE_WIDTH * 0.3,
    backgroundColor: Constant.App.colors.blueColor,
    marginTop: metrices.DEVICE_HEIGHT * 0.03,
  },

  nextButtonTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.whiteColor,
  },

  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  question: {
    alignSelf: 'center',
    paddingVertical: 40,
    paddingHorizontal: 15,
    fontSize: Constant.App.textSize.xLarge,
  },
});

export default styles;
