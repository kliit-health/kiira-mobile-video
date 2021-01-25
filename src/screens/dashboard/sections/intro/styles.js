import {StyleSheet, Dimensions} from 'react-native';
import {text, colors} from '../../../../utils/constants';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 14,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: text.size.xxxxLarge,
    fontFamily: text.fontFamily.poppinsSemiBold,
    textAlign: 'center',
    color: colors.charcoal,
  },
});
