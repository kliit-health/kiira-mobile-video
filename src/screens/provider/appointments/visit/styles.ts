import {StyleSheet} from 'react-native';
import metrics, {smallScreen} from '../../../../utils/metrices';
import Constant from '../../../../utils/constants';

let parentPaddingValue = metrics.width * 0.1;

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 1,
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrics.width * 0.5,
    height: 42,
    backgroundColor: Constant.App.colors.whiteColor,
  },

  buttonText: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.blueColor,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  dateContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: Constant.App.colors.greyColorText,
    width: metrics.width,
  },

  dateText: {
    fontSize: 18,
    marginVertical: 15,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  informationContainer: {
    marginHorizontal: 25,
    flexDirection: 'column',
  },

  informationTitle: {
    fontSize: 18,
    marginBottom: 8,
    color: Constant.App.colors.blueColor,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  informationText: {
    fontSize: 16,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  locationImage: {
    height: 35,
    width: 20,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 20,
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

  modalImage: {
    height: 80,
    width: 80,
    marginVertical: 25,
  },

  modalText: {
    marginHorizontal: 15,
    fontSize: 22,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    fontWeight: '700',
  },

  modalButtonContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  modalButton: {
    backgroundColor: Constant.App.colors.blueColor,
    borderRadius: 20,
    width: 100,
    padding: 10,
    marginHorizontal: 10,
  },

  name: {
    marginVertical: metrics.height * 0.01,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    fontWeight: '700',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  expertName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  expertNameTextStyle: {
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    fontWeight: '700',
  },

  expertProfession: {
    flexDirection: 'row',
  },

  availability: {
    fontSize: Constant.App.textSize.Large,
    fontWeight: '500',
    marginLeft: -70,
    marginTop: 20,
    width: metrics.width,
  },

  expertProfessionTextStyle: {
    fontSize: Constant.App.textSize.Medium,
    color: Constant.App.colors.blackColor,
    marginRight: 10,
  },

  patientParentContainerStyle: {
    backgroundColor: Constant.App.colors.whiteColor,
    paddingLeft: parentPaddingValue * 0.2,
    paddingRight: parentPaddingValue * 0.2,
    paddingBottom: parentPaddingValue * 0.2,
    paddingTop: parentPaddingValue * 0.2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: metrics.width,
  },

  myRecentExpertContainerStyle: {
    backgroundColor: Constant.App.colors.whiteColor,
    paddingLeft: parentPaddingValue * 0.2,
    paddingRight: parentPaddingValue * 0.2,
    paddingBottom: parentPaddingValue * 0.2,
    paddingTop: parentPaddingValue * 0.2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: metrics.width,
    marginTop: 10,
  },

  expertImage: {
    width: smallScreen ? 80 : 100,
    height: smallScreen ? 80 : 100,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: Constant.App.colors.blueColor,
  },

  expertImageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    zIndex: 1,
  },

  parentContainerStyle: {
    flexDirection: 'column',
    paddingLeft: parentPaddingValue + 4,
    paddingRight: (parentPaddingValue + 4) * 0.5,
    backgroundColor: 'white',
    borderRadius: 15,
  },

  reason: {
    marginTop: metrics.height * 0.005,
    marginLeft: 110,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    fontWeight: '400',
    justifyContent: 'flex-start',
  },

  textStyle: {
    color: Constant.App.colors.whiteColor,
    textAlign: 'center',
  },

  expertInfoParentContainerStyle: {
    backgroundColor: Constant.App.colors.whiteColor,
    paddingLeft: parentPaddingValue * 0.2,
    paddingRight: parentPaddingValue * 0.2,
    paddingBottom: parentPaddingValue * 0.2,
    paddingTop: parentPaddingValue * 0.2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: metrics.width,
    marginTop: 10,
  },

  visitDetailsTitle: {
    backgroundColor: Constant.App.colors.blueColor,
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 10,
    color: Constant.App.colors.whiteColor,
    borderColor: Constant.App.colors.blackColor,
    borderWidth: 1,
    width: metrics.width * 0.85,
  },

  visitDetailsParentContainer: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: metrics.width * 0.85,
    height: 300,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
    margin: 15,
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 1,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },
});

export default styles;
