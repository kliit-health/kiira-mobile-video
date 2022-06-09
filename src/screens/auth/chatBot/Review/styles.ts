import { StyleSheet } from 'react-native';
import { text, colors } from '~/utils/constants';

const { size, fontFamily } = text;

const styles = StyleSheet.create({
  category: {
    flexWrap: 'wrap',
    fontFamily: fontFamily.poppinsSemiBold,
  },

  value: {
    flexWrap: 'wrap',
    fontFamily: fontFamily.proximaNovaSemiBold,
    color: colors.primaryBlue,
    marginBottom: 10,
  },

  plan: {
    flexWrap: 'wrap',
    fontFamily: fontFamily.proximaNovaSemiBold,
    color: colors.primaryBlue,
    marginBottom: 10,
  },

  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: 42,
    marginVertical: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },

  pronounsContainer: {
    flexDirection: 'column',
    margin: 10,
    alignItems: 'center',
  },

  title: {
    fontFamily: fontFamily.poppinsSemiBold,
    fontSize: size.xLarge,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.black,
    marginHorizontal: 8,
  },
});

export default styles;
