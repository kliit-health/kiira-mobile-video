import {StyleSheet} from 'react-native';
import Constant from 'utils/constants';
import metrices from 'utils/metrices';

const styles = StyleSheet.create({
  check: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 20,
    height: 20,
  },

  container: {
    flex: 1,
  },

  icon: {
    marginLeft: 5,
    width: 20,
    height: 20,
  },

  info: {
    padding: 20,
  },

  infoContainer: {
    width: metrices.width * 0.8,
    alignSelf: 'center',
    backgroundColor: Constant.App.colors.whiteColor,
    borderRadius: 20,
    padding: 10,
    marginBottom: 50,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 3, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 3, //IOS
    elevation: 2, // Android
  },
});

export default styles;
