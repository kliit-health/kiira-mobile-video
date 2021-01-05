import {StyleSheet} from 'react-native';
import Constant from '../../../utils/constants';
import metrices from '../../../utils/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  profileContainer: {
    flexDirection: 'row',
    width: metrices.DEVICE_WIDTH * 0.8,
    position: 'relative',
    top: -30,
    left: metrices.DEVICE_WIDTH * 0.1,
    backgroundColor: Constant.App.colors.whiteColor,
    borderRadius: 20,
    padding: 10,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 3, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 3, //IOS
    elevation: 2, // Android
  },

  name: {
    marginLeft: 10,
    fontSize: Constant.App.textSize.Normal,
    fontWeight: '500',
  },

  reason: {
    marginTop: 5,
    marginLeft: 10,
    color: Constant.App.colors.dark40,
  },

  detailsContainer: {
    flexDirection: 'column',
  },

  infoContainer: {
    flexDirection: 'row',
    width: metrices.DEVICE_WIDTH * 0.8,
    alignSelf: 'center',
    backgroundColor: Constant.App.colors.whiteColor,
    borderRadius: 20,
    padding: 10,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 3, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 3, //IOS
    elevation: 2, // Android
    marginTop: 20,
  },

  info: {
    padding: 20,
  },

  icon: {
    marginLeft: 5,
    width: 20,
    height: 20,
  },

  check: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 20,
    height: 20,
  },

  button: {
    backgroundColor: 'white',
    borderColor: '#2196F3',
    borderWidth: 2,
    borderRadius: 20,
    padding: 5,
    elevation: 2,
    width: 100,
    marginTop: 5,
    marginHorizontal: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
