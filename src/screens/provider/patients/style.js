import {StyleSheet} from 'react-native';
import Constant from '../../../utils/constants';
import metrics from '../../../utils/metrices';
import {getStatusBarHeight} from '../../../components/iPhoneXHelper';

let parentPaddingValue = metrics.DEVICE_WIDTH * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = metrics.DEVICE_WIDTH * 0.03;
var childPadding = parentPadding + childPaddingValue * 2;

export const AVATAR_SIZE = 111;

const styles = StyleSheet.create({
  cancelButton: {
    alignSelf: 'center',
    borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrics.DEVICE_WIDTH - childPadding,
    backgroundColor: Constant.App.colors.whiteColor,
    marginTop: metrics.DEVICE_HEIGHT * 0.01,
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 1,
  },

  cancelButtonText: {
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

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Constant.App.colors.offWhiteColor,
    // marginTop: getStatusBarHeight(),
    // marginBottom: 50,
  },

  detail: {
    alignItems: 'center',
    margin: 20,
  },

  detailContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  detailText: {
    marginBottom: 10,
    fontWeight: 'bold',
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

  textStyle: {
    color: Constant.App.colors.whiteColor,
    textAlign: 'center',
  },

  title: {
    alignSelf: 'center',
    marginVertical: 5,
    fontSize: 20,
  },

  visitContainer: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: metrics.DEVICE_WIDTH * 0.85,
    height: 225,
    borderRadius: 15,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
    margin: 15,
  },
});

export default styles;

export const modifiers = {
  searchBar: {
    root: {
      marginTop: 20,
    },
  },
  container: {
    safeAreaBottom: {
      height: 0,
    },
  },
};
