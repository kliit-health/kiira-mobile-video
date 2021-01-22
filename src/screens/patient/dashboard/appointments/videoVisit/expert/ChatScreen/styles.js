import {StyleSheet} from 'react-native';
import Constant from '../../../../utils/constants/index';
import metrices from '../../../../utils/metrices';

let parentPaddingValue = metrices.DEVICE_WIDTH * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = metrices.DEVICE_WIDTH * 0.03;
let childPadding = parentPadding + childPaddingValue * 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 15,
  },
  itemRight: {
    padding: 10,
    fontSize: 18,
    height: 44,
    alignSelf: 'flex-end',
  },
  balloon: {
    alignSelf: 'baseline',
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 20,
  },
  row: {
    padding: 5,
    flex: 1,
  },
  messageinput: {
    flex: 1,
    textAlign: 'justify',
    height: 50,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  messageinputcontainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 5,
  },
  roundedbackgroud: {
    height: 40,
    width: 40,
    margin: 5,
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#3f51b5',
  },

  noContainerStyle: {
    alignSelf: 'center',
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 1,
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrices.DEVICE_WIDTH - childPadding,
    backgroundColor: Constant.App.colors.whiteColor,
    marginTop: metrices.DEVICE_HEIGHT * 0.03,
  },

  noTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.blueColor,
  },

  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 30,
  },

  yesContainerStyle: {
    alignSelf: 'center',
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrices.DEVICE_WIDTH - childPadding,
    backgroundColor: Constant.App.colors.blueColor,
    marginTop: metrices.DEVICE_HEIGHT * 0.03,
  },

  yesTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.whiteColor,
  },
});

export default styles;
