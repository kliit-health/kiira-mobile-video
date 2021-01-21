import {StyleSheet} from 'react-native';
import {text} from '../../../../../utils/constants';

const styles = StyleSheet.create({
  question: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontWeight: '500',
    fontSize: text.size.xxxxLarge,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export const modifiers = {
  button: {
    root: {
      marginVertical: 5,
    },
  },
};

export default styles;
