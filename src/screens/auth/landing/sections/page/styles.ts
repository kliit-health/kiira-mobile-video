import {StyleSheet} from 'react-native';
import {text} from '~/utils/constants';

export default StyleSheet.create({
  root: {
    flex: 1,
    margin: 10,
    height: '100%',
  },
  image: {
    width: '100%',
    height: 300,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'center',
    padding: 10,
  },
  description: {
    fontFamily: text.fontFamily.poppinsLight,
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
    marginBottom: 40,
  },
});
