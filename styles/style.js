import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
const Styles = StyleSheet.create({
  bg: {
    width: width,
    height: height,
  },
  box_logos: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title1: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
  },
  title2: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  title3: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  p: {
    marginVertical: 10,
    textAlign: "center",
  },
  logos: {
    width: width / 2,
    height: height / 4,
  },
  box_msg: {
    width: width,
    marginLeft: width / 10,
    marginBottom: height / 10,
    padding: 40,
    paddingRight: 70,
    borderRadius: 25,
    backgroundColor: "white",
  },
  btn: {
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  btn2: {
    alignItems: "center",
    padding: 3,
    borderRadius: 25,
  },
  title4: {
    fontWeight: "bold",
    marginVertical: 10,
    marginHorizontal: 10,
    textAlign: "right",
    color: "white",
  },
});
export { Styles };
