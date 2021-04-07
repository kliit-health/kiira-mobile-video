import {StyleSheet} from 'react-native';
import {text} from 'utils/constants';

export default StyleSheet.create({
  question: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.regular,
  },
  radio: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    margin: 15,
  },
  questionContainer: {
    marginBottom: 14,
  },
});

export const modifiers = {
  button: {
    root: {
      marginTop: 'auto',
    },
  },
};
