import {StyleSheet} from 'react-native';
import metrices from '../../../../utils/metrices';
import Constant from '../../../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 15,
    fontSize: 18,
    height: 70,
    flexDirection: 'row',
    // justifyContent: "flex-start",
    // alignItems: "center",
    backgroundColor: 'white',
    width: '20%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    width: metrices.DEVICE_WIDTH * 0.8,
    alignSelf: 'center',
    backgroundColor: Constant.App.colors.whiteColor,
    borderRadius: 20,
    padding: 10,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 3, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 3, //IOS
    elevation: 2, // Android
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    marginRight: 5,
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'white',
    borderColor: '#2196F3',
    borderWidth: 2,
    borderRadius: 20,
    padding: 5,
    elevation: 2,
    width: 100,
    marginTop: 5,
    marginRight: 10,
  },
  detailsContainer: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  userName: {
    marginStart: 16,
  },
  roundedbackgroud: {
    height: 40,
    width: 40,
    margin: 5,
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#FFF',
  },
  inputsContainer: {
    overflow: 'hidden',
    alignSelf: 'center',
    backgroundColor: '#FFF',
    height: 120,
    width: '85%',
    borderRadius: 15,
    // borderTopLeftRadius: 15,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
    margin: 15,
  },
  activityBackground: {
    flex: 1,
    backgroundColor: '#e5e5ea',
  },
  activityTitle: {
    marginTop: 50,
    alignSelf: 'center',
    padding: 10,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    // marginTop: 5,
    // marginStart: 15,
  },
  unreadCountView: {
    marginLeft: '50%',
    width: 25,
    height: 25,
    backgroundColor: 'red',
    alignSelf: 'flex-end',
    borderRadius: 25 / 2,
    padding: 3,
    justifyContent: 'flex-end',
  },
  unreadCountText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  activityView: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemView: {
    // flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  blockedUserText: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
