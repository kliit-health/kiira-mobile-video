import {StyleSheet} from 'react-native';
import Constant from '../../../../../../../utils/constants';
import metrics from '../../../../../../../utils/metrices';

let parentPaddingValue = metrics.DEVICE_WIDTH * 0.05;
let parentPadding = parentPaddingValue * 2;

const styles = StyleSheet.create({
  rowRightParentContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: 70,
    marginTop: 10,
    marginBottom: 10,
  },
  rowRightContainerView: {
    backgroundColor: Constant.App.colors.chatHighLightedBgColor,
    borderRadius: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginRight: 5,
    padding: 5,
  },
  messagesRightTextStyle: {
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    padding: 10,
  },
  rowLeftParentContainerStyle: {
    flexDirection: 'row',
    marginRight: 70,
    marginTop: 10,
    marginBottom: 10,
  },
  rowLeftContainerStyle: {
    backgroundColor: Constant.App.colors.greyBgAsk,
    borderRadius: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: 5,
    padding: 5,
  },
  messagesLeftTextStyle: {
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    padding: 10,
  },
  staticTextContainerStyle: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  staticTextStyle: {
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },
  dateContainerStyle: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateTextStyle: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Small,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    padding: 5,
  },
  chatInputParentContainer: {
    flexDirection: 'column',
    width: metrics.DEVICE_WIDTH,
    padding: parentPaddingValue,
    backgroundColor: Constant.App.colors.whiteColor,
    borderTopWidth: 1,
    borderTopColor: Constant.App.colors.greyBgAsk,
  },

  sendButtonContainerStyle: {
    alignSelf: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 8,
    paddingRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width:
      metrics.DEVICE_WIDTH -
      parentPadding -
      30 -
      (metrics.DEVICE_WIDTH - parentPadding - 30 - 10 - 44),
  },
});

export default styles;
