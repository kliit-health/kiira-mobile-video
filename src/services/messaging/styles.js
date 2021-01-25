import {StyleSheet} from 'react-native';
import {text, colors} from '../../utils/constants';

export default {
  card: {
    container: {
      backgroundColor: colors.white,
      borderRadius: 10,
      padding: 20,
      maxWidth: '80%',
      alignSelf: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      position: 'relative',
      width: '100%',
    },
    text: {
      fontFamily: text.fontFamily.poppinsRegular,
      fontSize: text.size.regular,
      color: colors.black,
      textAlign: 'justify',
    },
  },
  modal: StyleSheet.create({
    root: {
      backgroundColor: 'transparent',
      top: 0,
      bottom: 0,
      margin: 'auto',
      left: 0,
      right: 0,
    },
  }),
};
