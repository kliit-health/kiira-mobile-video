import {StyleSheet} from 'react-native';
import Constant from '../../../../../utils/constants';
import metrics from '../../../../../utils/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
  textlayout: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: metrics.DEVICE_WIDTH * 0.85,
    height: 200,
    borderRadius: 25,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
    borderColor: Constant.App.colors.blueColor,
    borderWidth: 1,
  },
  lable: {},
  inputsContainer: {
    marginTop: 50,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
  },
  input: {
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    height: 50,
    borderWidth: 0,
    borderColor: '#3f51b5',
    borderRadius: 20,
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    elevation: 10,
  },
  buttonStyle: {
    margin: 20,
    marginLeft: 50,
    marginRight: 50,
    justifyContent: 'center',
  },
  SubmitButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: Constant.App.colors.blueColor,
    borderRadius: 20,
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  LoadingIndicator: {
    marginTop: 40,
  },

  subtitle: {
    textAlign: 'center',
    margin: 30,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontSize: Constant.App.textSize.Normal,
  },
});

export default styles;
