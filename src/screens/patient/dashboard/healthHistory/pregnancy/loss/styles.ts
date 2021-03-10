import {StyleSheet} from 'react-native';
import {colors, text} from '../../../../../../utils/constants';

export default StyleSheet.create({
  button: {
    marginTop: 'auto',
  },
  title: {
    fontSize: text.size.xxxxxLarge,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: text.fontFamily.poppinsBold,
    marginBottom: 40,
  },
  description: {
    fontSize: text.size.regular,
    textAlign: 'center',
    color: colors.blueGrey,
    fontFamily: text.fontFamily.poppinsRegular,
    marginBottom: 20,
  },
});
