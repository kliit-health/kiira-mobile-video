import {StyleSheet} from 'react-native';
import Constant from '../../../../../utils/constants';
import metrices from '../../../../../utils/metrices';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderColor: '#2196F3',
    borderWidth: 2,
    borderRadius: 20,
    padding: 5,
    elevation: 2,
    width: 100,
    marginTop: 5,
    marginRight: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
  },

  container: {
    flex: 1,
  },

  detailsContainer: {
    flexDirection: 'column',
  },

  image: {
    marginRight: 5,
    width: 60,
    height: 60,
    borderRadius: 50,
  },

  info: {
    padding: 20,
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
    marginBottom: 20,
  },

  name: {
    marginLeft: 10,
    fontSize: Constant.App.textSize.Normal,
    fontWeight: '500',
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

  reason: {
    marginTop: 5,
    marginLeft: 10,
    color: Constant.App.colors.dark40,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
