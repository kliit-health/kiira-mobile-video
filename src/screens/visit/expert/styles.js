import {StyleSheet} from 'react-native';
import metrics from '../../../utils/metrices';
import Constant from '../../../utils/constants';
import metrices from '../../../utils/metrices';

let parentPaddingValue = metrics.DEVICE_WIDTH * 0.1;

const styles = StyleSheet.create({
  dateContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: Constant.App.colors.greyColorText,
    width: metrics.DEVICE_WIDTH,
  },

  dateText: {
    fontSize: 18,
    marginVertical: 15,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },

  parentContainerStyle: {
    backgroundColor: Constant.App.colors.whiteColor,
    paddingLeft: parentPaddingValue * 0.2,
    paddingRight: parentPaddingValue * 0.2,
    paddingBottom: parentPaddingValue * 0.2,
    paddingTop: parentPaddingValue * 0.2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.DEVICE_WIDTH,
  },

  expertIsPrescriber: {
    flexDirection: 'row',
    marginLeft: metrices.DEVICE_WIDTH * 0.22,
  },

  patientImage: {
    bottom: -100,
    left: 10,
    width: 90,
    height: 90,
    padding: 2,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: Constant.App.colors.blueColor,
    position: 'absolute',
  },

  patientImageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    zIndex: 1,
  },

  expertName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: metrices.DEVICE_WIDTH * 0.22,
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
    marginLeft: metrices.DEVICE_WIDTH * 0.22,
    marginVertical: 5,
  },

  expertProfessionTextStyle: {
    fontSize: Constant.App.textSize.xxlarge,
    color: Constant.App.colors.blueGrey,
    marginRight: 10,
  },

  name: {
    marginVertical: metrics.DEVICE_HEIGHT * 0.01,
    marginLeft: 110,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    fontWeight: '700',
    justifyContent: 'flex-start',
  },

  reason: {
    marginTop: metrics.DEVICE_HEIGHT * 0.005,
    marginLeft: 110,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    fontWeight: '400',
    justifyContent: 'flex-start',
  },

  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: parentPaddingValue * 0.5,
    backgroundColor: Constant.App.colors.whiteColor,
    width: metrics.DEVICE_WIDTH,
  },

  informationContainer: {
    marginHorizontal: 32,
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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalImage: {
    height: 80,
    width: 80,
    marginVertical: 25,
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

  myRecentExpertContainerStyle: {
    flexDirection: 'column',
    paddingLeft: parentPaddingValue + 4,
    paddingRight: (parentPaddingValue + 4) * 0.5,
    backgroundColor: 'white',
    flex: 1,
    width: 320,
    height: 150,
    borderRadius: 15,
  },

  noContainerStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 1,
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrics.DEVICE_WIDTH * 0.5,
    height: 42,
    backgroundColor: Constant.App.colors.whiteColor,
  },

  noTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.blueColor,
  },

  parentContainerStyle: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },

  titleTextStyle: {
    textAlign: 'left',
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Large,
    fontFamily: Constant.App.fontFamily.headerBold,
  },

  textStyle: {
    color: Constant.App.colors.whiteColor,
    textAlign: 'center',
  },

  visitDetailsTitle: {
    backgroundColor: Constant.App.colors.blueColor,
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 10,
    color: Constant.App.colors.whiteColor,
    borderColor: Constant.App.colors.blackColor,
    borderWidth: 1,
    width: metrics.DEVICE_WIDTH * 0.85,
  },

  visitDetailsParentContainer: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: metrics.DEVICE_WIDTH * 0.85,
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
