import {StyleSheet} from 'react-native';
import {text, colors} from '../../utils/constants';

export const styles = {
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
  message: StyleSheet.create({
    card: {
      backgroundColor: colors.white,
      borderRadius: 10,
      padding: 20,
      maxWidth: '80%',
      alignSelf: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      position: 'relative',
      paddingBottom: 20,
    },
    text: {
      fontFamily: text.fontFamily.poppinsRegular,
      fontSize: text.size.large,
      color: colors.black,
      textAlign: 'center',
    },
    buttonsContainer: {
      marginTop: 40,
      width: '100%',
      flexDirection: 'row',
    },
    divider: {
      width: 20,
    },
  }),
};
