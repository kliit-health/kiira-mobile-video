import {StyleSheet, Dimensions} from 'react-native';
import {text, colors} from '../../../../../utils/constants';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 9,
  },
  container: {
    width: width / 3 - 24,
    marginHorizontal: 9,
  },
  title: {
    fontSize: text.size.small,
    fontFamily: text.fontFamily.poppinsRegular,
    alignSelf: 'center',
    marginTop: 3,
    marginBottom: 10,
    textAlign: 'center',
    color: colors.charcoal,
  },
  box: {
    height: width / 3 - 24,
    width: width / 3 - 24,
    backgroundColor: colors.azure,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: colors.black,
    shadowOffset: {width: 1, height: 2},
    shadowRadius: 3,
    shadowOpacity: 0.2,
  },
  image: {
    width: 50,
    height: 50,
  },
});
