import {StyleSheet} from 'react-native';
import {text, colors} from '../../utils/constants';

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.pink,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 7,
    alignSelf: 'flex-end',
    marginBottom: 'auto',
  },
  text: {
    fontFamily: text.fontFamily.poppinsRegular,
    color: colors.white,
    fontSize: text.size.medium,
    padding: 0,
  },
  iconContainer: {
    paddingRight: 5,
  },
});
