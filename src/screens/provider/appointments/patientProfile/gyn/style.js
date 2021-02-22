import {StyleSheet} from 'react-native';
import Constant from '../../../../../utils/constants';
import metrices from '../../../../../utils/metrices';

const styles = StyleSheet.create({
  blank: {
    width: metrices.DEVICE_WIDTH * 0.8,
    alignSelf: 'center',
    marginTop: 50,
    height: 200,
    padding: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  container: {
    flex: 1,
    backgroundColor: Constant.App.colors.whiteColor,
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
    textAlignVertical: 'top',
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

  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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

  question: {
    alignSelf: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
    fontSize: Constant.App.textSize.xLarge,
  },

  singleInput: {
    textAlign: 'center',
    borderBottomColor: Constant.App.colors.blueColor,
    borderBottomWidth: 2,
    width: metrices.DEVICE_WIDTH * 0.8,
    alignSelf: 'center',
    marginTop: 50,
    color: 'black',
    padding: 10,
  },
});

export default styles;
