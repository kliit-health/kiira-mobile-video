import {StyleSheet, Platform} from 'react-native';
import Constant from '~/utils/constants';
import metrics from '~/utils/metrices';

let parentPaddingValue = metrics.width * 0.05;
let parentPadding = parentPaddingValue * 2;

const styles = StyleSheet.create({
  actionModalBlueTextStyle: {
    width: metrics.width - 20,
    color: Constant.App.colors.blueColor,
    textAlign: 'center',
    padding: 12,
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  actionModalInnerContainerStyle: {
    borderRadius: 10,
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    width: metrics.width - 20,
    backgroundColor: Constant.App.colors.whiteColor,
  },

  actionModalLineSeperator: {
    backgroundColor: Constant.App.colors.greyBgAsk,
    width: metrics.width - 20,
    height: 1,
  },

  actionModalParentContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Constant.App.colors.modalBgSemiTransparentColor,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 200,
    paddingBottom: 20,
  },

  actionModalOkBtnErrorContainerStyle: {
    width: metrics.width - 20,
    padding: 10,
    backgroundColor: Constant.App.colors.whiteColor,
    marginTop: 10,
    borderRadius: 10,
  },

  actionModalOkBtnErrorTextStyle: {
    color: Constant.App.colors.blueColor,
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.headerBold,
  },

  actionModalTitleTextStyle: {
    width: metrics.width - 20,
    color: Constant.App.colors.lightGrey,
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    padding: 12,
  },

  askedQuestionContainerStyle: {
    marginTop: metrics.height * 0.03,
    padding: parentPaddingValue,
    width: metrics.width - parentPadding,
    backgroundColor: Constant.App.colors.blueColor,
    alignSelf: 'center',
    borderRadius: 5,
  },

  askedQuestionExpertInfoTextStyle: {
    alignSelf: 'center',
    marginTop: metrics.height * 0.01,
    marginLeft: 10,
    width: metrics.width - parentPadding - parentPadding - 60,
    color: Constant.App.colors.whiteColor,
    fontSize: Constant.App.textSize.Medium,
    fontWeight: '200',
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  askedQuestionTextStyle: {
    alignSelf: 'center',
    marginTop: metrics.height * 0.01,
    width: metrics.width - parentPadding - parentPadding,
    color: Constant.App.colors.whiteColor,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontWeight: '400',
  },

  badgeContainerStyle: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: Constant.App.colors.blueColor,
    borderRadius: metrics.width * 0.08 * 0.2,
    width: 25,
    height: 25,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },

  badgeTextStyle: {
    textAlign: 'center',
    color: Constant.App.colors.whiteColor,
    fontSize: Constant.App.textSize.xSmall,
  },

  buttonContainerStyle: {
    alignSelf: 'center',
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrics.width - parentPadding,
    backgroundColor: Constant.App.colors.blueColor,
    marginTop: metrics.height * 0.03,
  },

  buttonTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.whiteColor,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 35,
    backgroundColor: Constant.App.colors.whiteColor,
  },

  creditTextStyle: {
    paddingLeft: parentPaddingValue + 4,
    color: Constant.App.colors.blueColorCreditText,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.headerRegular,
  },

  disabled: {
    backgroundColor: Constant.App.colors.greyBgAsk
  },

  emptyCreditsContainerStyle: {
    marginTop: metrics.height * 0.03,
    padding: parentPaddingValue,
    width: metrics.width - parentPadding,
    backgroundColor: Constant.App.colors.greyBgAsk,
    alignSelf: 'center',
    borderRadius: 5,
  },

  emptyCreditsTextStyle: {
    alignSelf: 'center',
    marginTop: metrics.height * 0.01,
    width: metrics.width - parentPadding - parentPadding,
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.xLarge,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontWeight: '400',
  },

  expertInfoContainerStyle: {
    flexDirection: 'row',
    marginTop: metrics.height * 0.01,
    width: metrics.width - parentPadding - parentPadding,
    alignSelf: 'center',
  },

  expertInfoTextStyle: {
    alignSelf: 'center',
    marginTop: metrics.height * 0.01,
    marginLeft: 10,
    width: metrics.width - parentPadding - parentPadding - 60,
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Medium,
    fontWeight: '200',
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  expertNameTextStyle: {
    textAlign: 'center',
    marginTop: metrics.height * 0.01,
    color: Constant.App.colors.blueColor,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  expertProfTextStyle: {
    color: Constant.App.colors.blackColor,
    textAlign: 'center',
    fontSize: Constant.App.textSize.Medium,
    fontWeight: '200',
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  headingProfileImageParentContainer: {
    width: metrics.width,
    flexDirection: 'row',
    padding: parentPaddingValue,
  },

  headingTextContainerStyle: {
    marginTop: metrics.height * 0.03,
    width: metrics.width - parentPadding - 75,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  headingTextStyle: {
    padding: 2,
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.xxxxLarge,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontWeight: '600',
  },

  headingTextHighlightedStyle: {
    padding: 2,
    color: Constant.App.colors.pinkColor,
    fontSize: Constant.App.textSize.xxxxLarge,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontWeight: '600',
  },

  inputTextContainerStyle: {
    marginTop: metrics.height * 0.05,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.width - parentPadding,
    paddingBottom: Platform.OS === 'ios' ? metrics.height * 0.01 : 0,
    borderBottomColor: Constant.App.colors.lightGrey,
    borderBottomWidth: 0.5,
  },

  inputTypeStyle: {
    paddingHorizontal: 0,
    color: Constant.App.colors.blackColor,
    width: metrics.width - parentPadding,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    textAlign: 'left',
    fontWeight: '200',
    textAlignVertical: 'top',
  },

  myRecentExpertTitleTextStyle: {
    marginTop: metrics.height * 0.03,
    paddingLeft: parentPaddingValue + 4,
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.xLarge,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontWeight: '500',
  },

  myRecentExpertContainerStyleRef: {
    justifyContent: 'center',
    backgroundColor: 'green',
    alignItems: 'center',
    width: metrics.width * 0.4,
    marginTop: metrics.height * 0.03,
    marginBottom: metrics.height * 0.03,
    flexDirection: 'column',
  },

  myRecentExpertContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrics.height * 0.03,
    marginBottom: metrics.height * 0.03,
    flexDirection: 'column',
    paddingLeft: parentPaddingValue + 4,
    paddingRight: (parentPaddingValue + 4) * 0.5,
  },

  myRecentExpertContainer1Style: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrics.height * 0.03,
    marginBottom: metrics.height * 0.03,
    flexDirection: 'column',
    paddingLeft: (parentPaddingValue + 4) * 0.5,
    paddingRight: (parentPaddingValue + 4) * 0.5,
  },

  myRecentExpertContainer2Style: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrics.height * 0.03,
    marginBottom: metrics.height * 0.03,
    flexDirection: 'column',
    paddingLeft: (parentPaddingValue + 4) * 0.5,
    paddingRight: parentPaddingValue + 4,
  },

  myPrevQuestionParentContainerStyle: {
    paddingTop: metrics.height * 0.03,
    paddingBottom: metrics.height * 0.05,
    width: metrics.width,
    flexDirection: 'column',
    height: metrics.height * 0.5,
    backgroundColor: Constant.App.colors.white,
  },

  myPrevQuestionTitleTextStyle: {
    paddingLeft: parentPaddingValue + 4,
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.xLarge,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontWeight: '500',
  },

  myPrevQuestionContainerStyle: {
    marginTop: metrics.height * 0.03,
    padding: parentPaddingValue,
    width: metrics.width - parentPadding,
    backgroundColor: Constant.App.colors.whiteColor,
    alignSelf: 'center',
    borderRadius: 5,
  },

  myPrevQuestionTextStyle: {
    alignSelf: 'center',
    marginTop: metrics.height * 0.01,
    width: metrics.width - parentPadding - parentPadding,
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontWeight: '400',
  },

  profileImgViewStyle: {
    alignItems: 'flex-end',
    width: 75,
    height: 75,
  },

  recentExpertParentContainerStyle: {
    marginTop: metrics.height * 0.03,
    width: metrics.width,
    flexDirection: 'column',
    backgroundColor: Constant.App.colors.greyBgAsk,
  },
});

export default styles;
