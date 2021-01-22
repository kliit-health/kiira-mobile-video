import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    minHeight: 180,
  },
  avatarContainer: {
    position: 'absolute',
    zIndex: 100,
    marginTop: 20,
  },
  detailsContainer: {
    margin: 20,
  },
  background: {
    backgroundColor: colors.white,
    borderRadius: 16,
    shadowColor: colors.black,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 5,
    shadowOpacity: 0.1,
    flex: 1,
  },
});
