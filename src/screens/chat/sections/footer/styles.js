import {StyleSheet} from 'react-native';
import Constant, {colors, text} from '../../../../utils/constants';
import metrics from '../../../../utils/metrices';

let parentPaddingValue = metrics.DEVICE_WIDTH * 0.05;

const styles = StyleSheet.create({
  resolvedText: {
    margin: 14,
    color: colors.lightGrey,
    textAlign: 'center',
    fontSize: text.size.regular,
    fontFamily: text.fontFamily.poppinsRegular,
  },
  mainContainer: {
    flexDirection: 'column',
    padding: 14,
    borderTopWidth: 1,
    borderTopColor: colors.pinkGrey,
  },
  cancelIcon: {
    width: 18,
    height: 18,
    marginBottom: 5,
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
  cameraContainer: {
    alignSelf: 'center',
    marginRight: 8,
  },
  cameraIcon: {
    width: 25,
    height: 25,
  },
  messageContainer: {
    flex: 1,
    flexDirection: 'row',
    borderColor: colors.pinkGrey,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
  },
  messageInput: {
    flex: 1,
    color: colors.blue,
    fontSize: text.size.regular,
    fontFamily: text.fontFamily.poppinsMedium,
    paddingBottom: 3,
    marginHorizontal: 5,
    marginVertical: 2,
  },
  sendContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  sendIcon: {
    height: 20,
    width: 20,
  },
});
export default styles;
