import { StyleSheet } from 'react-native';
// import { colors } from '~/utils/constants';
import Constant from '../../../utils/constants';
import metrics from '~/utils/metrices';

export default StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: '#ECFCFF',
  },
  searchBar: {
    alignSelf: 'center',
    width: metrics.width * 0.75,
    height: 40,
    backgroundColor: '#F6F7FA',
    fontFamily: Constant.App.fontFamily.headerRegular,
    color: Constant.App.colors.blackColor,
    fontSize: Constant.App.textSize.Normal,
    // backgroundColor: 'transparent',
    borderWidth: 0, //no effect
    shadowColor: 'transparent', //no effect
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderRadius: 8,
    paddingLeft: 20,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    flex: 1,
  },
});

export const modifiers = {
  container: {
    root: {},
  },
  searchBar: {
    root: {
      marginTop: 10,
      marginHorizontal: 20,
      backgroundColor: '#F6F7FA',
      marginVertical: 20,
      borderRadius: 8,
    },
  },
  button: {
    root: {
      marginHorizontal: 5,
    },
  },
};
