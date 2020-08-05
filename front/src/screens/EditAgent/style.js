import { StyleSheet, Dimensions } from "react-native";
import { buttonColor, verdeTexto, inputDark } from "../../Common/constans";

export const style = StyleSheet.create({
  container: {
    alignItems: "center",
    /* backgroundColor: "#FAFBFF", */

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
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
    textTransform: "uppercase",
  },
  title: {
    alignSelf: "flex-start",
    marginBottom: 10,
    color: "#424242",
  },
  titleDark: {
    alignSelf: "flex-start",
    marginBottom: 10,
    color: "white",
  },
  text: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: "3%",
    marginTop: "6%",
    marginLeft: "2%",
    //fontFamily: "sans-serif",
  },
  searchSection: {
    flex: 1,
    width: "80%",
    backgroundColor: "red",
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
  inputDark: {
    backgroundColor: inputDark,
    color: "white",
    width: 350,
    padding: 5,
    marginBottom: 25,
    elevation: 2,
    height: 40,
    shadowRadius: 4.0,
    shadowOpacity: 0.25,
    borderRadius: 3,
  },
  image: {
    marginTop: "2%",
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").height / 9,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "black",
    shadowColor: "#000",
    marginLeft: "auto",
    marginRight: "auto",
  },
  imageDark: {
    marginTop: "2%",
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").height / 9,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "white",
    shadowColor: "#000",
    marginLeft: "auto",
    marginRight: "auto",
  },
  textOpenCamera: {
    marginBottom: "2%",
    marginTop: "2%",
    color: "#A4A4A4",
    fontSize: 15,
    textAlign: "center",
  },
  textMaxsize: {
    margin: "2%",
    color: "#606060",
    fontSize: 10,
    textAlign: "center",
  },
  confirmar: {
    backgroundColor: "#00CC96",
    borderRadius: 5,
    marginTop: "5%",
    marginBottom: "5%",
    alignSelf: "center",
    justifyContent: "center",
  },
  textConfirmar: {
    color: "#ffffff",
    fontSize: 17,
    fontFamily: "nunito",
    textAlign: "center",
    paddingLeft: "4%",
    paddingRight: "4%",
    paddingBottom: "2%",
    paddingTop: "2%",
  },
});
