import {StyleSheet} from 'react-native';
import {colors, text} from '../../../utils/constants';
import metrices from '../../../utils/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },

  document: {
    flex: 1,
    width: metrices.DEVICE_WIDTH * 0.9,
    // marginVertical: 15,
    alignSelf: 'center',
  },

  heading: {
    borderBottomColor: colors.blue,
    borderBottomWidth: 2,
    margin: 10,
  },

  title: {
    fontSize: text.size.xLarge,
    fontWeight: 'bold',
    paddingVertical: 5,
  },

  subheading: {
    fontSize: text.size.large,
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 5,
    borderBottomWidth: 2,
  },

  info: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 5,
  },

  notes: {
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginBottom: 5,
    borderWidth: 2,
    padding: 10,
  },
});

export default styles;
