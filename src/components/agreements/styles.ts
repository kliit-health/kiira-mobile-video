import { StyleSheet } from 'react-native';
import { colors, text } from '~/utils/constants';

export default StyleSheet.create({
  activityIndicator: {
    alignSelf: 'center',
  },

  content: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
  },

  logo: {
    alignItems: 'center',
    marginVertical: 20,
  },
});

export const buttonStyles = StyleSheet.create({
  root: {
    margin: 20,
    backgroundColor: colors.primaryBlue,
  },
});

export const headerStyles = StyleSheet.create({
  root: {
    padding: 10,
    paddingHorizontal: 20,
    height: 60,
  },
});

export const modalStyles = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    paddingVertical: 50,
  },
});

export const containerStyles = StyleSheet.create({
  root: {
    overflow: 'hidden',
    borderRadius: 20,
  },

  container: {
    padding: 0,
  },
});

export const markdownStyles = {
  heading1: {
    color: 'red',
    fontSize: text.size.large,
    textAlign: 'left',
  },

  heading2: {
    color: 'black',
    textAlign: 'justify',
    fontSize: text.size.large,
  },

  strong: {
    color: 'blue',
  },

  em: {
    color: 'cyan',
  },

  text: {
    color: 'black',
    textAlign: 'justify',
  },

  blockQuoteText: {
    color: 'grey',
  },

  blockQuoteSection: {
    flexDirection: 'row',
  },

  blockQuoteSectionBar: {
    width: 3,
    height: null,
    backgroundColor: '#DDDDDD',
    marginRight: 15,
  },

  codeBlock: {
    fontFamily: 'Courier',
    fontWeight: '500',
    backgroundColor: '#DDDDDD',
  },

  tableHeader: {
    backgroundColor: 'grey',
  },
};
