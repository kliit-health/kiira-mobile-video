import { StyleSheet } from 'react-native';
import { text, colors } from '~/utils/constants';

const styles = StyleSheet.create({
  version: {
    marginTop: 10,
    alignSelf: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: '5%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: '2%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  button: {
    borderRadius: 20,
    margin: '6%',
    padding: 10,
    elevation: 2,
    backgroundColor: colors.primaryBlue,
    width: '80%',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ModalContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    borderWidth: 1,
  },
  modalText: {
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.regular,
    color: colors.black,
    textAlign: 'left',
    margin: '6%',
    lineHeight: 30,
  },
});

export default styles;

export const modifiers = {
  container: {
    safeAreaBottom: {
      height: 0,
    },
    root: {
      backgroundColor: colors.offWhite,
    },
  },
  button: {
    text: {
      color: colors.primaryBlue,
      fontSize: text.size.large,
    },
  },
};
