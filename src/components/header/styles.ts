import { StyleSheet } from 'react-native';
import { colors, text } from '../../utils/constants';

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.offWhite,
  },
  title: {
    position: 'absolute',
    textAlign: 'center',
    left: 0,
    right: 0,
    color: colors.black,
    fontSize: text.size.xLarge,
    fontFamily: text.fontFamily.poppinsRegular,
    fontWeight: '400',
  },
  editButton: {
    marginLeft: '42%',
    flex: 0,
  },
  filterButton: {
    height: 35,
    width: 35,
  },
  homeButton: {
    height: 25,
    width: 25,
  },
  billingButton: {
    height: 25,
    width: 25,
  },
  settingButton: {
    height: 25,
    width: 25,
  },
  chatViewStyle: {
    height: 36,
    width: 36,
    borderRadius: 18,
  },
  listButton: {
    height: 12,
    width: 12,
    left: 55,
  },
  backArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  profileStyle: {
    height: 36,
    width: 36,
    borderRadius: 18,
    marginLeft: 15,
  },
  headerAvatar: {
    flexDirection: 'column',
    marginLeft: 10,
    width: 200,
  },
  nameStyle: {
    left: 0,
    right: 0,
    color: colors.black,
    fontSize: text.size.regular,
    fontFamily: text.fontFamily.poppinsBold,
    fontWeight: '500',
  },
  timeStyle: {
    left: 0,
    right: 0,
    color: colors.greyDark,
    fontSize: text.size.small,
    fontFamily: text.fontFamily.poppinsLight,
    fontWeight: '400',
  },
});

export const modifiers = {
  themed: {
    root: {
      backgroundColor: colors.azure,
      borderBottomWidth: 0,
    },
    title: {
      color: colors.white,
      fontSize: text.size.xLarge,
    },
    backButton: {
      root: {
        marginBottom: 3,
      },
    },
  },
  backButton: {
    image: {
      transform: [{ rotate: '180deg' }],
    },
  },
};
