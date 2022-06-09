import { StyleSheet } from 'react-native';
import { colors, text } from '~/utils/constants';

export default StyleSheet.create({
  title: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.regular,
  },
  paneTitle: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.xLarge,
  },
  listContainer: {
    flexDirection: 'row',
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  content: {
    fontSize: text.size.medium,
    lineHeight: 22,
    color: '#909297',
  },
  icon: {
    height: 44,
    width: 44,
    marginRight: 20,
  },
});
