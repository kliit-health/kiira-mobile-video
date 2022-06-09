import { StyleSheet } from 'react-native';
import { colors, text } from '~/utils/constants';

const styles = StyleSheet.create({
  cancelIcon: {
    width: 18,
    height: 18,
    marginBottom: 5,
  },

  cameraContainer: {
    alignSelf: 'center',
    marginRight: 8,
    borderColor: colors.pinkGrey,
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
  },

  cameraIcon: {
    width: 25,
    height: 25,
  },

  importedImageContainer: {
    backgroundColor: colors.white,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  importedImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    alignSelf: 'flex-end',
  },

  inputContainer: {
    flexDirection: 'row',
  },

  mainContainer: {
    flexDirection: 'column',
    padding: 14,
    borderTopWidth: 1,
    borderTopColor: colors.pinkGrey,
  },

  messageContainer: {
    flex: 1,
    flexDirection: 'row',
    borderColor: colors.pinkGrey,
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
  },

  messageInput: {
    flex: 1,
    color: colors.black,
    fontSize: text.size.regular,
    fontFamily: text.fontFamily.poppinsRegular,
    paddingBottom: 3,
    marginHorizontal: 10,
    marginVertical: 5,
  },

  resolvedText: {
    margin: 14,
    color: colors.black,
    textAlign: 'center',
    fontSize: text.size.regular,
    fontFamily: text.fontFamily.poppinsRegular,
  },

  sendContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  sendIcon: {
    height: 40,
    width: 40,
  },
});
export default styles;
