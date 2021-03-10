import { StyleSheet } from "react-native";
import Constant from "../../utils/constants";

export default StyleSheet.create({
  innerContainerStyle: {
    borderRadius: 10,
    flexWrap: "wrap",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 45,
    paddingBottom: 45,
    marginLeft: 90,
    marginRight: 90,
    backgroundColor: "white",
  },

  parentContainerStyle: {
    flex: 1,
    backgroundColor: Constant.App.colors.modalBgSemiTransparentColor,
    justifyContent: "center",
    alignItems: "center",
  },

  textStyle: {
    color: Constant.App.colors.blackColor,
    textAlign: "center",
    paddingLeft: 25,
    paddingRight: 25,
    fontSize: Constant.App.textSize.Large,
  },
});
