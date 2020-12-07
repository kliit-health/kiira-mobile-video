import { StyleSheet } from 'react-native';
import { text } from '../../utils/constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 30,
  },
  title: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.regular,
    alignSelf: 'center',
  },
  picker: {
    margin: 20,
  },
});
