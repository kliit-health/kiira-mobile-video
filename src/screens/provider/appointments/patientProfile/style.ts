import {StyleSheet} from 'react-native';
import Constant from '../../../../utils/constants';
import metrices from '../../../../utils/metrices';

const {textSize} = Constant.App;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  check: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginRight: 15,
  },

  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    width: metrices.width,
    paddingVertical: 60,
    backgroundColor: Constant.App.colors.blueColor,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  headerText: {
    color: Constant.App.colors.whiteColor,
    fontSize: Constant.App.textSize.xxLarge,
    fontFamily: Constant.App.fontFamily.headerBold,
    fontWeight: '500',
    marginLeft: metrices.width * 0.15,
  },

  icon: {
    marginLeft: 5,
    width: 20,
    height: 20,
  },

  info: {
    padding: 20,
  },

  infoContainer: {
    width: metrices.width * 0.8,
    alignSelf: 'center',
    backgroundColor: Constant.App.colors.whiteColor,
    borderRadius: 20,
    padding: 10,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 3, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 3, //IOS
    elevation: 2, // Android
    marginBottom: 30,
  },

  lockButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: 'red',
    borderWidth: 2,
  },

  name: {
    marginLeft: 10,
    fontSize: Constant.App.textSize.Normal,
    fontWeight: '500',
  },

  profileContainer: {
    flexDirection: 'row',
    width: metrices.width * 0.8,
    position: 'relative',
    top: -30,
    left: metrices.width * 0.1,
    backgroundColor: Constant.App.colors.whiteColor,
    borderRadius: 20,
    padding: 10,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 3, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 3, //IOS
    elevation: 2, // Android
  },

  subtitle: {
    width: metrices.width * 0.85,
    fontSize: textSize.Large,
    padding: 20,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  title: {
    width: metrices.width * 0.85,
    fontSize: textSize.xxLarge,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});

export default styles;
