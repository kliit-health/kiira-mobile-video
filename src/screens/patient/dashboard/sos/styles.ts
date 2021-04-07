import {StyleSheet} from 'react-native';
import {text} from 'utils/constants';

export default StyleSheet.create({
  title: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontWeight: '500',
    fontSize: text.size.xxxxLarge,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    margin: 20,
  },
});
