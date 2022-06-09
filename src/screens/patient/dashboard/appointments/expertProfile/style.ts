import { StyleSheet } from 'react-native';
import metrics from '~/utils/metrices';
import { text, colors } from '~/utils/constants';

let parentPaddingValue = metrics.width * 0.1;
let parentPadding = parentPaddingValue * 2;
let titlePaddingValue = metrics.width * 0.05;

const { size, fontFamily } = text;

const styles = StyleSheet.create({
  backContainerStyle: {
    alignSelf: 'flex-start',
    marginTop: 3,
  },

  backIconStyle: {
    width: 20,
    height: 20,
  },

  bioContainerStyle: {
    paddingLeft: parentPaddingValue,
    paddingRight: parentPaddingValue,
    paddingTop: parentPaddingValue,
    flexDirection: 'column',
    justifyContent: 'center',
    width: metrics.width,
  },

  bioTextStyle: {
    width: metrics.width - parentPadding,
    marginTop: metrics.height * 0.02,
    color: colors.black,
    fontSize: size.medium,
    fontFamily: fontFamily.poppinsRegular,
  },

  bioTextStyleBold: {
    width: metrics.width - parentPadding,
    marginTop: metrics.height * 0.02,
    color: colors.black,
    fontSize: size.medium,
    fontFamily: fontFamily.poppinsSemiBold,
    fontWeight: '500',
  },

  bioTitleTextStyle: {
    width: metrics.width - parentPadding,
    color: colors.black,
    fontSize: size.xLarge,
    fontFamily: fontFamily.poppinsSemiBold,
    fontWeight: '500',
  },

  btnContainerStyle: {
    marginTop: metrics.height * 0.02,
    width: metrics.width - parentPadding,
    padding: 12,
    backgroundColor: colors.primaryBlue,
    borderRadius: 20,
  },

  btnTextStyle: {
    color: colors.white,
    textAlign: 'center',
    fontSize: size.large,
    fontFamily: fontFamily.poppinsRegular,
  },

  expertInfoParentContainerStyle: {
    backgroundColor: colors.white,
    paddingLeft: parentPaddingValue,
    paddingRight: parentPaddingValue,
    paddingBottom: parentPaddingValue * 0.2,
    paddingTop: parentPaddingValue * 0.2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.width,
  },

  expertNameTextBoldStyle: {
    marginTop: metrics.height * 0.01,
    color: colors.black,
    fontSize: size.large,
    fontWeight: '500',
    fontFamily: fontFamily.poppinsSemiBold,
  },

  expertInfoProfessionTextStyle: {
    marginTop: metrics.height * 0.01,
    color: colors.black,
    fontSize: size.small,
    fontFamily: fontFamily.poppinsRegular,
    fontWeight: '200',
  },

  expertProfessionLoctionBoldStyle: {
    marginTop: metrics.height * 0.01,
    color: colors.greyAccent,
    fontSize: size.small,
    fontWeight: '200',
    fontFamily: fontFamily.poppinsRegular,
  },

  hoursContainerStyle: {
    padding: parentPaddingValue,
    flexDirection: 'column',
    justifyContent: 'center',
    width: metrics.width,
  },

  parentContainerStyle: {
    flex: 1,
    alignItems: 'center',
    marginTop: 35,
    backgroundColor: colors.greyLight,
    flexDirection: 'column',
  },

  phoneNumberTextStyleBold: {
    color: colors.primaryBlue,
    fontSize: size.medium,
    fontFamily: fontFamily.poppinsRegular,
  },

  titleContainerStyle: {
    backgroundColor: colors.white,
    padding: titlePaddingValue,
    flexDirection: 'column',
    width: metrics.width,
    borderBottomColor: colors.greyLight,
    borderBottomWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleTextStyle: {
    alignSelf: 'center',
    position: 'absolute',
    color: colors.black,
    textAlign: 'center',
    fontSize: size.large,
    fontFamily: fontFamily.poppinsSemiBold,
    fontWeight: '600',
  },
});

export default styles;
