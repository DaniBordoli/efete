import { StyleSheet, Dimensions } from "react-native";
import { headerColor, buttonColor } from "../../Common/constans";

export const style = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FAFBFF",

    paddingBottom: 5,
    paddingTop: 20,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
  },
  containerTitle: {
    color: "#6F76E4",
    fontSize: 22,
    fontFamily: "nunito",
    margin: 40,
    textAlign: "center",
    textTransform: "uppercase",
  },
  title: {
    marginBottom: 10,
    color: "#424242",
  },
  input: {
    backgroundColor: "#ffffff",
    width: 350,
    padding: 5,
    marginBottom: 25,
    elevation: 2,
    height: 40,
    shadowRadius: 4.0,
    shadowOpacity: 0.25,
    borderRadius: 3,
  },
  input2: {
    width: "100%",
    backgroundColor: "#FAFBFF",
    borderRadius: 3,
  },
  confirmar: {
    backgroundColor: "#00CC96",

    borderRadius: 5,
    marginTop: 30,
    marginBottom: 30,
    width: "50%",
    alignSelf: "center",
  },
  textConfirmar: {
    color: "#ffffff",
    fontSize: 18,
    height: 45,
    width: 194,
    fontFamily: "nunito",
    textAlign: "center",
    paddingTop: 10,
  },
  openCamera: {
    alignItems: "center",
  },
  textOpenCamera: {
    marginTop: 15,
    marginBottom: 5,
    color: "#A4A4A4",
    fontSize: 15,
  },
  textMaxsize: {
    margin: 5,
    color: "#606060",
    fontSize: 10,
  },
  image: {
    width: 150,
    height: 300,
    borderRadius: 20,
    marginTop: 30,
    alignSelf: "center",
  },
  foto: {
    backgroundColor: buttonColor,
    width: 125,
    height: 35,
    textAlign: "center",
    paddingTop: 3.5,
    borderRadius: 5,
  },
});
