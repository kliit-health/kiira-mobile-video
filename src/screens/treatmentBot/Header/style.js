import {StyleSheet} from 'react-native';
import metrics from '../../../utils/metrices';
import Constant from '../../../utils/constants';

const style = StyleSheet.create({
  container: {
    width: '90%',
  },
  logoStyle: {
    height: metrics.DEVICE_WIDTH * 0.15,
    width: metrics.DEVICE_WIDTH * 0.32,
    marginTop: 30,
  },
  bandaid: {
    alignSelf: 'center',
    // alignContent: 'flex-start',
    marginLeft: 10,
    marginBottom: 15,
    height: 10,
    width: 25,
    // flexDirection: 'row',
  },
  backButton: {
    transform: [{rotate: '180deg'}],
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
});

export default style;
