import { StyleSheet } from 'react-native';
import { colors } from '~/utils/constants';

export default StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.offWhite,
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});

export const modifiers = {
  modal: {
    root: {
      height: '95%',
      justifyContent: 'flex-start',
      backgroundColor: 'white',
    },
  },
  header: {
    root: {
      margin: 5,
      marginLeft: 10,
      borderRadius: 24,
    },
  },
  button: {
    root: {
      flex: 1,
      width: '100%',
      marginTop: 10,
      marginBottom: 10,
    },
  },
};
