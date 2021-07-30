import {StyleSheet} from 'react-native';
import {text} from '~/utils/constants';

export default StyleSheet.create({
  activityIndicator: {
    alignSelf: 'center',
  },
  title: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.large,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: '500',
    marginBottom: 20,
  },
  logoContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center',
  },
  description: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.regular,
    textAlign: 'justify',
  },
  contents: {
    flex: 1,
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    alignSelf: 'center',
  },
});

export const modifiers = {
  modal: {
    root: {
      height: '100%',
      backgroundColor: 'transparent',
      justifyContent: 'center',
      paddingBottom: 70,
      paddingTop: 70,
      padding: 20,
    },
  },
  container: {
    root: {
      overflow: 'hidden',
      borderRadius: 20,
    },
    container: {
      padding: 20,
    },
  },
  button: {
    root: {
      marginTop: 20,
    },
  },
};
