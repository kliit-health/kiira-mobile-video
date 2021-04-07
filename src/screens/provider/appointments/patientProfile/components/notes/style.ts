import {StyleSheet} from 'react-native';
import Constant from 'utils/constants';
import metrices from 'utils/metrices';

const {textSize} = Constant.App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonContainerStyle: {
    alignSelf: 'center',
    borderRadius: 25,
    padding: Constant.App.dimensions.btnPaddingGlobal,
    width: metrices.width * 0.65,
    backgroundColor: Constant.App.colors.blueColor,
    height: 50,
    marginVertical: metrices.height * 0.03,
  },

  buttonTextStyle: {
    textAlign: 'center',
    fontSize: Constant.App.textSize.xxLarge,
    fontFamily: Constant.App.fontFamily.bodyRegular,
    color: Constant.App.colors.whiteColor,
  },

  input: {
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 5,
    width: metrices.width * 0.8,
    alignSelf: 'center',
    marginTop: 50,
    height: 420,
    color: 'black',
    padding: 10,
  },

  title: {
    width: metrices.width * 0.85,
    fontSize: textSize.xxLarge,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },

  subtitle: {
    width: metrices.width * 0.85,
    fontSize: textSize.Medium,
    padding: 20,
  },

  warning: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: metrices.width * 0.85,
    borderRadius: 25,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
    borderColor: Constant.App.colors.redColor,
    borderWidth: 1,
    margin: 40,
  },

  section: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: metrices.width * 0.85,
    borderRadius: 25,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 1,
    margin: 20,
  },
});

export default styles;
