import { StyleSheet } from 'react-native';
import { colors } from '~/utils/constants';

const styles = StyleSheet.create({
  container: {
    borderColor: colors.black,
    borderWidth: 2,
    backgroundColor: colors.babyBlue,
    justifyContent: 'flex-end',
  },

  confirmationContainer: {
    justifyContent: 'center',
    flex: 1,
  },

  visitEnd: {
    margin: 20,
    justifyContent: 'center',
    width: '40%',
  },

  visitReturn: {
    margin: 20,
    justifyContent: 'center',
    width: '40%',
    backgroundColor: colors.white,
    borderColor: colors.greyAccent,
    borderWidth: 2,
  },

  visitReturnText: {
    color: colors.primaryBlue,
  },

  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginHorizontal: 30,
  },
});

export default styles;
