import {StyleSheet} from 'react-native';
import Constant from '../../../../../../utils/constants';

const styles = StyleSheet.create({
  buttonStyle: {
    margin: 20,
    marginLeft: 50,
    marginRight: 50,
    justifyContent: 'center',
  },

  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 30,
  },

  submitButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: Constant.App.colors.blueColor,
    borderRadius: 20,
  },

  textStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: Constant.App.textSize.Normal,
    fontFamily: Constant.App.fontFamily.bodyRegular,
  },
});

export default styles;
