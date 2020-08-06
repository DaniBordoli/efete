import { StyleSheet, Dimensions } from "react-native";

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: "100%",
  },
  title: {
    color: "#6F76E4",
    fontSize: 25,
    fontFamily: "nunito",
    margin: "3%",
    textAlign: "center",
    textTransform: "uppercase",
  },

  title2: {
    color: "#6F76E4",
    fontSize: 20,
    fontFamily: "nunito",
    margin: "15%",
    textAlign: "center",
    textTransform: "uppercase",
  },
  titleNumber: {
    color: "#6F76E4",
    fontSize: 45,
    fontFamily: "nunito",
    margin: "3%",
    textAlign: "center",
    textTransform: "uppercase",
  },

  text1: {
    fontSize: 20,
    marginTop: "3%",
    marginLeft: "10%",
    marginRight: "10%",
    fontFamily: "nunito",
    textAlign: "center",
  },

  hr: {
    width: "80%",
    borderTopColor: "#808080",
    borderTopWidth: 1,
    alignSelf: "center",
  },

  textCancelar: {
    color: "#00CC96",
    fontSize: 20,
    paddingLeft: "8%",
    paddingRight: "8%",
    paddingBottom: "3%",
    paddingTop: "2%",
    fontFamily: "nunito",
  },
});
