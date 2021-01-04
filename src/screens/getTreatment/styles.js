import {StyleSheet} from 'react-native';
import {text, colors} from '../../utils/constants';

export default StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    padding: 15,
    paddingTop: 0,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 15,
    alignItems: 'flex-start',
  },
  nameText: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.large,
    color: colors.black,
  },
  titleText: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.regular,
    color: colors.charcoal,
    marginRight: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    padding: 15,
    paddingTop: 10,
    backgroundColor: colors.white,
  },
  divider: {
    width: 15,
  },
  tagsList: {
    borderWidth: 0.3,
    borderColor: colors.gray,
    backgroundColor: colors.white,
  },
  tagsContentContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingHorizontal: 15,
    height: 40,
  },
  tagsText: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.medium,
    color: colors.charcoal,
  },
  contactContainer: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontFamily: text.fontFamily.poppinsSemiBold,
    fontSize: text.size.large,
    paddingVertical: 10,
  },
  sectionText: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.regular,
    textAlign: 'auto',
    color: colors.charcoal,
    paddingBottom: 20,
  },
  detailsContentContainer: {
    padding: 15,
    paddingBottom: 0,
  },
});

export const modifiers = {
  linking: {root: {paddingBottom: 5}},
  ratings: {root: {alignSelf: 'flex-start'}},
  header: {
    root: {
      borderBottomWidth: 0,
    },
  },
};
