import { StyleSheet, Dimensions } from "react-native";
import { headerColor, buttonColor } from "../../Common/constans";

export const style = StyleSheet.create({
  mainContainer:{
  backgroundColor: '#FDFDFF',
  height: '100%',
  },
  container: {
    alignItems: "center",
    borderRadius: 10,
    width: "80%",
    alignSelf: "center",
    marginRight: '10%',
    marginLeft: '10%',
    marginBottom: '5%',
    marginTop: '5%',
    borderColor: '#CCCFFF',
    borderWidth: 0.5
  },
  containerTitle: {
    color: "#6F76E4",
    fontSize: 22,
    fontFamily: "nunito",
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: '12%',
    marginBottom: '5%'

  },
  title: {
    color: "#424242",
    marginBottom: '3%'
  },
  input: {
    backgroundColor: "#ffffff",
    padding: '2%',
    marginBottom: '10%',
    elevation: 2,
    height: 40,
    shadowRadius: 4.0,
    shadowOpacity: 0.25,
    borderRadius: 3,
    width: 300,
  },
  confirmar: {
    backgroundColor: "#00CC96",
    borderRadius: 5,
    marginTop: '10%',
    marginBottom: '5%',
    width: "50%",
    alignSelf: "center",
  },
  confirmarDisabled: {
    backgroundColor: "#E5E5E5",
    borderRadius: 5,
    marginTop: 30,
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
    textAlign: "center",
  },
  textMaxsize: {
    margin: 5,
    color: "#606060",
    fontSize: 10,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 12,
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
