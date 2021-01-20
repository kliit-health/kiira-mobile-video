import {StyleSheet} from 'react-native';
import metrics from '../../utils/metrices';

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  button: {
    marginTop: 'auto',
  },
  input: {
    height: 200,
    borderWidth: 1,
    width: metrics.DEVICE_WIDTH * 0.9,
  },
});
