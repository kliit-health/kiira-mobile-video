import {StyleSheet} from 'react-native';
import {colors, text} from '../../../../../utils/constants';

export default {
  list: StyleSheet.create({
    listContainer: {},
    mainContainer: {
      flex: 1,
      marginVertical: 5,
    },
  }),
  item: StyleSheet.create({
    card: {
      backgroundColor: colors.white,
      borderRadius: 10,
      shadowColor: colors.black,
      shadowOffset: {width: 1, height: 1},
      shadowRadius: 5,
      shadowOpacity: 0.1,
      padding: 10,
      paddingLeft: 12,
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginHorizontal: 10,
      marginVertical: 5,
    },
    title: {
      fontSize: text.size.medium,
      color: colors.charcoal,
      padding: 0,
      margin: 0,
    },
    subtitle: {
      fontFamily: text.fontFamily.poppinsRegular,
      fontSize: text.size.medium,
      color: colors.black,
      margin: 0,
    },
    outerContainer: {
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flex: 1,
      marginRight: 10,
    },
    innerContainer: {
      marginTop: 5,
    },
  }),
  fallBack: StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontFamily: text.fontFamily.poppinsRegular,
      fontSize: text.size.regular,
      color: colors.charcoal,
      textAlign: 'center',
    },
  }),
};
