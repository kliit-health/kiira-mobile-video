import {StyleSheet} from 'react-native';
import Constant from '../../../utils/constants';
import metrices from '../../../utils/metrices';

const {textSize} = Constant.App;

const styles = StyleSheet.create({
  buttonContainerStyle: {
    alignSelf: 'center',
    borderRadius: 25,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrices.DEVICE_WIDTH * 0.85,
    backgroundColor: Constant.App.colors.blueColor,
    height: 50,
  },

  buttonTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.xxLarge,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.whiteColor,
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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

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

  lockButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
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

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  subtitle: {
    width: metrices.DEVICE_WIDTH * 0.85,
    fontSize: textSize.Large,
    padding: 20,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  title: {
    width: metrices.DEVICE_WIDTH * 0.85,
    fontSize: textSize.xxLarge,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});

export default styles;
