import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centerProductBox: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 20,
  },

  circle: {
    borderWidth: 1,
    borderRadius: 10000,
    alignItems: "center",
    justifyContent: "center",
  },

  circleFill: {
    borderWidth: 1,
    borderRadius: 10000,
  },

  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "white",
    marginBottom: 20,
  },

  icon: {
    borderWidth: 1,
    borderRadius: 10000,
    alignItems: "center",
    justifyContent: "center",
  },

  leftProductBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  productBox: {
    flexDirection: "row",
    borderRadius: 7,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 10,
  },

  productBoxLess: {
    flexDirection: "row",
    marginTop: 10,
  },
});

export default styles;
