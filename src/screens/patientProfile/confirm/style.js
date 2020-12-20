import {StyleSheet} from 'react-native';
import Constant from '../../../utils/constants';
import metrices from '../../../utils/metrices';

const {textSize} = Constant.App;

let parentPaddingValue = metrices.DEVICE_WIDTH * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = metrices.DEVICE_WIDTH * 0.03;
var childPadding = parentPadding + childPaddingValue * 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
  },

  header: {
    flexDirection: 'row',
    width: metrices.DEVICE_WIDTH,
    paddingVertical: 60,
    backgroundColor: Constant.App.colors.blueColor,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  headerText: {
    color: Constant.App.colors.whiteColor,
    fontSize: Constant.App.textSize.xxLarge,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontWeight: '500',
    marginLeft: metrices.DEVICE_WIDTH * 0.15,
  },

  input: {
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 5,
    width: metrices.DEVICE_WIDTH * 0.8,
    alignSelf: 'center',
    marginTop: 50,
    height: 400,
    color: 'black',
    padding: 10,
  },

  buttonContainerStyle: {
    alignSelf: 'center',
    borderRadius: 25,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrices.DEVICE_WIDTH * 0.85,
    backgroundColor: Constant.App.colors.blueColor,
    height: 50,
    marginTop: metrices.DEVICE_HEIGHT * 0.03,
  },

  buttonTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.xxLarge,
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
    borderColor: 'red',
    borderWidth: 2,
  },
  cancelButton: {
    backgroundColor: 'white',
    borderColor: '#2196F3',
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
    marginBottom: 10,
  },
  lockButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
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
    width: metrices.DEVICE_WIDTH * 0.85,
    fontSize: textSize.xxLarge,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },

  subtitle: {
    width: metrices.DEVICE_WIDTH * 0.85,
    fontSize: textSize.Large,
    padding: 20,
  },
});

export default styles;
