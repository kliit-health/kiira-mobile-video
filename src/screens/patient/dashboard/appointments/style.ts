import {StyleSheet} from 'react-native';
import Constant from '~/utils/constants';
import metrics, {smallScreen} from '~/utils/metrices';
import {text} from '~/utils/constants';

let parentPaddingValue = metrics.width * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = metrics.width * 0.03;
var childPadding = parentPadding + childPaddingValue * 2;

export const AVATAR_SIZE = 111;

const styles = StyleSheet.create({
  cancelTextStyle: {
    textAlign: 'left',
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Medium,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Constant.App.colors.whiteColor,
    paddingTop: 35,
  },

  creditButtonStyle: {
    marginLeft: -9,
    marginTop: 14,
    width: metrics.width * 0.49,
    height: 44,
    borderRadius: 22,
    backgroundColor: Constant.App.colors.whiteColor,
  },

  creditButtonTextStyle: {
    textAlign: 'center',
    paddingTop: 11,
    fontFamily: Constant.App.fontFamily.avenirMedium,
    fontSize: Constant.App.textSize.Normal,
    color: Constant.App.colors.blueColor,
  },

  creditTextStyle: {
    textAlign: 'left',
    paddingTop: 10,
    color: Constant.App.colors.whiteColor,
    fontSize: Constant.App.textSize.xLarge,
    fontFamily: Constant.App.fontFamily.headerMedium,
    fontWeight: '500',
  },

  genderTextStyle: {
    textAlign: 'left',
    paddingTop: 5,
    color: Constant.App.colors.whiteColor,
    fontSize: Constant.App.textSize.xLarge,
    fontFamily: Constant.App.fontFamily.headerLight,
    fontWeight: '400',
  },

  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: parentPaddingValue * 0.5,
    backgroundColor: Constant.App.colors.whiteColor,
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

  logoutParentContainerStyle: {
    marginTop: metrics.width * 0.1,
    marginBottom: metrics.width * 0.1,
  },

  logoutTextStyle: {
    textAlign: 'center',
    paddingTop: 10,
    color: Constant.App.colors.redColorLogout,
    fontSize: Constant.App.textSize.xLarge,
    width: metrics.width,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  nameTextStyle: {
    textAlign: 'left',
    color: Constant.App.colors.whiteColor,
    fontSize: Constant.App.textSize.xxLarge,
    fontFamily: Constant.App.fontFamily.headerSemiBold,
  },

  myRecentExpertContainerStyle: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: metrics.width * 0.85,
    borderRadius: 15,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
    margin: 15,
    padding: 15,
  },

  parentContainerStyle: {
    flex: 1,
  },

  profileImageParentContainerStyle: {
    flexDirection: 'column',
  },

  profileInfoParentContainerStyle: {
    flexDirection: 'column',
    alignSelf: 'center',
    width: metrics.width - AVATAR_SIZE - parentPadding,
  },

  titleTextStyle: {
    textAlign: 'left',
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.headerBold,
  },

  expertContainer: {
    flexDirection: smallScreen ? 'column' : 'row',
    alignSelf: 'center',
  },

  expertImage: {
    width: smallScreen ? 90 : 100,
    height: smallScreen ? 90 : 100,
    padding: 2,
    borderRadius: 60,
    borderWidth: 2,
    margin: 5,
    borderColor: Constant.App.colors.blueColor,
  },

  expertImageContainer: {
    flexDirection: 'row',
    margin: 10,
    alignSelf: 'center',
    zIndex: 1,
  },

  expertName: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  expertNameTextStyle: {
    color: Constant.App.colors.blackColor,
    fontSize: 35,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  expertPrescriberImage: {
    width: 20,
    height: 20,
  },

  expertPrescriberTextStyle: {
    color: Constant.App.colors.blueColor,
    marginLeft: 10,
  },

  expertProfession: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },

  expertProfessionTextStyle: {
    fontSize: Constant.App.textSize.xxlarge,
    color: Constant.App.colors.blueGrey,
    marginRight: 10,
  },

  expertNameTextStyle: {
    flex: 1,
    marginTop: metrics.height * 0.025,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  expertRatingImage: {
    width: 20,
    height: 20,
    padding: 5,
  },

  expertRatingTextStyle: {
    fontSize: Constant.App.textSize.Large,
    color: Constant.App.colors.blueGrey,
  },

  expertDetailsCard: {
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
  },

  noContainerStyle: {
    alignSelf: 'center',
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrics.width - childPadding,
    backgroundColor: Constant.App.colors.whiteColor,
    marginTop: metrics.height * 0.01,
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 1,
  },

  noTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.blueColor,
  },

  yesContainerStyle: {
    alignSelf: 'center',
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrics.width - childPadding,
    backgroundColor: Constant.App.colors.blueColor,
    marginTop: metrics.height * 0.03,
  },

  yesTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.whiteColor,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  title: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontWeight: '500',
    fontSize: text.size.xxxxLarge,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.regular,
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    margin: 20,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;

export const modifiers = {
  button: {
    root: {
      marginTop: 'auto',
    },
  },
};
