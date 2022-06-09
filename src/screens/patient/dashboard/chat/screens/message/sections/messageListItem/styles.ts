import { StyleSheet } from 'react-native';
import Constant, { colors, text } from '~/utils/constants';
import metrics from '~/utils/metrices';

let parentPaddingValue = metrics.width * 0.05;
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
    borderRadius: 10,
    borderBottomRightRadius: 0,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginRight: 5,
    padding: 5,
  },

  messagesRightText: {
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
    color: colors.black,
    fontSize: text.size.regular,
    fontFamily: text.fontFamily.poppinsRegular,
    padding: 5,
  },

  rowLeftParentContainerStyle: {
    flexDirection: 'row',
    marginRight: 70,
    marginTop: 10,
  },

  rowLeftContainerStyle: {
    backgroundColor: colors.greyLight,
    borderRadius: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: 25,
    padding: 5,
  },

  avatarStyle: {
    flexDirection: 'column-reverse',
    marginLeft: 5,
    marginBottom: 2,
    padding: 5,
    justifyContent: 'space-between',
  },

  messagesLeftText: {
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
    color: colors.black,
    fontSize: text.size.regular,
    fontFamily: text.fontFamily.poppinsRegular,
    padding: 5,
  },

  staticTextContainerStyle: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  staticTextStyle: {
    color: colors.black,
    fontSize: text.size.regular,
    fontFamily: text.fontFamily.poppinsRegular,
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
    color: colors.black,
    fontSize: text.size.small,
    fontFamily: text.fontFamily.poppinsRegular,
    padding: 5,
  },

  chatInputParentContainer: {
    flexDirection: 'column',
    width: metrics.width,
    padding: parentPaddingValue,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.gray,
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
      metrics.width -
      parentPadding -
      30 -
      (metrics.width - parentPadding - 30 - 10 - 44),
  },

  profileStyle: {
    height: 36,
    width: 36,
    borderRadius: 18,
    marginLeft: 16,
  },
});

export default styles;
