import {StyleSheet} from 'react-native';
import {text, colors} from '../../../../../utils/constants';

export default StyleSheet.create({
  logo: {
    alignSelf: 'center',
    height: 60,
    width: 200,
  },
  question: {
    marginTop: 20,
    color: colors.black,
    fontSize: text.size.xxLarge,
    fontFamily: text.fontFamily.poppinsRegular,
    textAlign: 'center',
  },
});

export const modifiers = {
  button: {
    root: {
      marginTop: 'auto',
    },
  },
};
