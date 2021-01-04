import {StyleSheet} from 'react-native';
import {text, colors} from '../../utils/constants';

export default StyleSheet.create({
  title: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontWeight: '500',
    fontSize: text.size.xxxxLarge,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
