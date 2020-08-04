import { StyleSheet, Dimensions } from "react-native";
import { buttonColor } from "../../Common/constans";

export const style = StyleSheet.create({
  centrar: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    marginTop: 50,
    color: "#6F76E4",
    fontSize: 64,
    alignItems: "center",
    fontFamily: "nunito-bold",
  },
  text2: {
    marginTop: Dimensions.get("window").height / 9,
    color: "#6F76E4",
    fontSize: 30,
    textAlign: "center",
    fontFamily: "nunito",
  },
  text3: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: Dimensions.get("window").height / 10,
    color: "#A3A3A3",
    fontSize: 30,
    textAlign: "center",
    fontFamily: "nunito",
  },
  input: {
    fontSize: 20,
    borderRadius: 20,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
    width: Dimensions.get("window").width / 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    fontWeight: "bold",
    letterSpacing: 3,
    textAlign: "center",
  },

  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonStyle: {
    width: Dimensions.get("window").width / 3,
    height: 60,
    backgroundColor: buttonColor,
    marginTop: Dimensions.get("window").height / 8,
  },
  titleStyle: { color: "white", fontSize: 20, fontWeight: "bold" },
  imageCont: {
    width: "100%",
  },
  image: {
    width: "100%",
  },
});
