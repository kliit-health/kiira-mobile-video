import {StyleSheet} from 'react-native';
import {text, colors} from 'utils/constants';

export const listStyles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export const itemFutureStyles = StyleSheet.create({
  root: {
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 5,
    shadowOpacity: 0.1,
  },
  headerContainer: {},
  title: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.large,
    color: colors.black,
  },
  subtitleContainer: {
    flexDirection: 'row',
  },
  subject: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.regular,
    color: colors.black,
  },
  subtitle: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.regular,
    color: colors.black,
  },
  timeContainer: {
    marginTop: 30,
    marginBottom: 30,
    padding: 10,

    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  timeItem: {
    alignItems: 'center',
  },
  primaryText: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.large,
    textAlign: 'center',
    color: colors.black,
    fontWeight: '500',
  },
  secondaryText: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.large,
    textAlign: 'center',
    color: colors.black,
    fontWeight: '500',
  },
});

export const itemPastStyles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
    borderBottomColor: colors.black,
    borderBottomWidth: 0.3,
  },
  subtitleContainer: {
    flexDirection: 'row',
  },
  subject: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.medium,
    color: colors.black,
  },
  dateText: {
    marginBottom: 3,
  },
  subtitle: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.medium,
    color: colors.charcoal,
  },
});

export const fallbackStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.regular,
    textAlign: 'center',
    color: colors.charcoal,
  },
});

export const separatorStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.white,
    borderBottomColor: colors.gray,
    borderBottomWidth: 0.3,
  },
  title: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.xLarge,
    color: colors.black,
    fontWeight: '500',
  },
});

export const itemModifiers = {
  list: {
    root: {
      alignItems: 'flex-start',
      flex: 0,
    },
  },
  button: {
    root: {
      flex: 0,
    },
  },
};

export const messageStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 30,
    maxWidth: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'relative',
    paddingBottom: 30,
  },
  messageText: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.regular,
    color: colors.black,
  },
});

export const messageModifiers = {
  root: {
    backgroundColor: 'transparent',
    top: 0,
    bottom: 0,
    margin: 'auto',
    left: 0,
    right: 0,
  },
};
