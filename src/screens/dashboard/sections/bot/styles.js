import {StyleSheet, Dimensions} from 'react-native';
import {text, colors} from '../../../../utils/constants';

export default {
  bot: StyleSheet.create({
    mainContainer: {
      width: '100%',
      flexDirection: 'row',
      marginBottom: 20,
    },
    logoImage: {
      height: 50,
      width: '25%',
      alignSelf: 'flex-end',
      marginBottom: 20,
    },
    messageContainer: {
      position: 'relative',
      backgroundColor: colors.lightGrey,
      borderRadius: 10,
      padding: 14,
      marginBottom: 10,
    },
    messageText: {
      fontFamily: text.fontFamily.poppinsRegular,
      fontSize: text.size.regular,
      color: colors.charcoal,
    },
    contentContainer: {
      width: '70%',
    },
  }),
  button: StyleSheet.create({
    root: {
      marginBottom: 5,
    },
  }),
};
