import {StyleSheet} from 'react-native';
import Constant from '../../../../../../utils/constants';
import metrices from '../../../../../../utils/metrices';

const styles = StyleSheet.create({
  name: {
    marginLeft: 10,
    fontSize: Constant.App.textSize.Normal,
    fontWeight: '800',
  },

  profileContainer: {
    flexDirection: 'row',
    width: metrices.width * 0.8,
    position: 'relative',
    top: -30,
    left: metrices.width * 0.1,
    backgroundColor: Constant.App.colors.whiteColor,
    borderRadius: 20,
    padding: 10,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 3, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 3, //IOS
    elevation: 2, // Android
  },

  profileImage: {
    marginLeft: 5,
    width: 60,
    height: 60,
    borderRadius: 50,
  },

  reason: {
    marginTop: 5,
    marginLeft: 10,
    color: Constant.App.colors.blackColor,
  },
});

export default styles;
