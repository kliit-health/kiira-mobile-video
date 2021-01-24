import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

export default {
  question: StyleSheet.create({
    container: {
      justifyContent: 'flex-end',
    },
  }),
  button: StyleSheet.create({
    root: {
      marginTop: 'auto',
    },
  }),
  input: StyleSheet.create({
    root: {
      marginBottom: 20,
      flex: 1,
      backgroundColor: colors.white,
      borderRadius: 10,
    },
    touchable: {
      flex: 1,
      height: 'auto',
      borderBottomWidth: 0,
      padding: 10,
    },
    textInput: {
      height: '100%',
    },
  }),
};
