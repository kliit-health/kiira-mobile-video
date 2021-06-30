import {StyleSheet} from 'react-native';
import {text, colors} from '~/utils/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: text.size.xLarge,
    fontFamily: text.fontFamily.poppinsRegular,
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
    color: colors.white,
  },
  newUser: {
    backgroundColor: colors.purple,
    marginHorizontal: 5,
    borderRadius: 15,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: {height: 13, width: 1},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 2,
    marginVertical: 40
  },
  complete: {
    backgroundColor: 'white',
    width: "92%",
    marginHorizontal: 10,
    borderRadius: 15,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: {height: 13, width: 1},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 2,
    marginVertical: 40
  },
  completeTitle: {
    fontSize: text.size.xLarge,
    fontFamily: text.fontFamily.poppinsLight,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  completeItem: {
    alignItems: "center",
  },
  completeText: { 
    marginTop: 5,
    textAlign: "center",
    fontSize: text.size.Medium,
    fontFamily: text.fontFamily.poppinsLight,
  },
  iconContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      paddingBottom: 20
  },
  pending: {
    backgroundColor: 'white',
    width: "92%",
    marginHorizontal: 10,
    borderRadius: 15,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: {height: 13, width: 1},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 2,
    marginVertical: 40
  },
  pendingIcon: {
    marginLeft: 20,
    marginTop: 20
  },
  pendingTitle: {
    fontSize: text.size.xLarge,
    fontFamily: text.fontFamily.poppinsLight,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  pendingSubTitle: {
    color: colors.purple,
    fontSize: text.size.Small,
    fontFamily: text.fontFamily.poppinsSemiBold,
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  actionItem: {
    marginTop: 5,
    // textAlign: "center",
    fontSize: text.size.xLarge,
    fontFamily: text.fontFamily.poppinsLight,
    // marginBottom: 20
  },
  actionItems: {
    alignItems: "flex-start",
    padding: 20
  },
});