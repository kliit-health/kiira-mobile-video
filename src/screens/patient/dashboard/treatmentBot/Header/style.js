import {StyleSheet} from 'react-native';
import metrics from '../../../../../utils/metrices';
import Constant from '../../../../../utils/constants';

const style = StyleSheet.create({
  backButton: {
    transform: [{rotate: '180deg'}],
  },

  bandaid: {
    alignSelf: 'center',
    marginLeft: 10,
    marginBottom: 15,
    height: 10,
    width: 25,
  },

  container: {
    width: '90%',
  },

  logoStyle: {
    height: metrics.DEVICE_WIDTH * 0.15,
    width: metrics.DEVICE_WIDTH * 0.32,
  },

  subHeadingContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
    justifyContent: 'space-between',
  },

  subHeadingTitle: {
    fontSize: 28,
    fontFamily: Constant.App.fontFamily.avenirBook,
    paddingRight: 20,
  },

  xContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 35,
  },
});

export default style;
