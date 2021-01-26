import {StyleSheet} from 'react-native';
import {text} from '../../../../../utils/constants';

export default StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: text.size.large,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 20,
  },
  description: {
    fontSize: text.size.regular,
    textAlign: 'justify',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
});

export const modifiers = {};
