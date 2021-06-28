import {StyleSheet} from 'react-native';
import {text, colors} from '~/utils/constants';

export default StyleSheet.create({
  logo: {
    alignSelf: 'center',
    height: 60,
    margin: 15,
    width: 200,
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  sectionContent: {
    color: colors.black,
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
    textAlign: 'justify',
    marginHorizontal: 15,
  },
  sectionTitle: {
    paddingVertical: 20,
    color: colors.black,
    fontSize: text.size.xLarge,
    fontFamily: text.fontFamily.poppinsSemiBold,
    marginHorizontal: 15,
  },
});
