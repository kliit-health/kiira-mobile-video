import {StyleSheet} from 'react-native';
import Constant from 'utils/constants';
import metrices from 'utils/metrices';

let parentPaddingValue = metrices.width * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = metrices.width * 0.03;
var childPadding = parentPadding + childPaddingValue * 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Constant.App.colors.whiteColor,
    paddingTop: 35,
  },

  itemsParentContainerStyle: {
    backgroundColor: Constant.App.colors.whiteColor,
    flexDirection: 'row',
    paddingLeft: parentPaddingValue,
    paddingRight: parentPaddingValue,
    paddingTop: parentPaddingValue * 0.5,
    paddingBottom: parentPaddingValue * 0.5,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1.5,
  },

  itemTextStyle: {
    textAlign: 'left',
    paddingTop: 5,
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: parentPaddingValue * 0.5,
    backgroundColor: Constant.App.colors.whiteColor,
  },

  titleTextStyle: {
    textAlign: 'left',
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.headerBold,
  },

  parentContainerStyle: {
    flex: 1,
    height: 800,
  },

  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 30,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    margin: 30,
  },

  yesContainerStyle: {
    alignSelf: 'center',
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrices.width - childPadding,
    backgroundColor: Constant.App.colors.blueColor,
    marginTop: metrices.height * 0.03,
  },

  yesTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.whiteColor,
  },
});

export default styles;
