import { StyleSheet } from "react-native";
import { buttonColor, verdeTexto } from "../../Common/constans";

export const style = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FAFBFF",
    flex: 1,
    height: "100%",
    width: "100%",
    paddingBottom: '5%'
  },
  containerTitle: {
    color: "#6F76E4",
    fontSize: 22,
    fontFamily: "nunito",
    marginTop: "12%",
    marginBottom: "10%",
    textTransform: "uppercase",
    textAlign: "center",
  },
  title: {
    marginBottom: "3%",
    color: "#424242",
    fontSize: 15,
  },
  text: {
    color: "black",
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: "uppercase",
    marginBottom: '3%',
    marginTop: '6%',
    marginLeft: '2%'
    //fontFamily: "sans-serif",
  },
  searchSection: {
    flex: 1,
    flexDirection: "column",
    width: '80%',
  },
  input: {
  fontSize: 16,
  padding: '3%',
  backgroundColor: "#ffffff",
  borderRadius: 8,
  elevation: 3,
  shadowOpacity: 0.5,
  shadowRadius: 2,
  },
  image: {
    marginTop: '5%',
    width: 200,
    height: 150,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'black',
    shadowColor: "#000",
  },
  openCamera: {
    alignItems: "center",
    marginTop: '2%',
  },
  textOpenCamera: {
    marginBottom: '2%',
    marginTop: '2%',
    color: "#A4A4A4",
    fontSize: 15,
  },
  textMaxsize: {
    margin: '2%',
    color: "#606060",
    fontSize: 10,
  },
  // foto: {
  //   backgroundColor: buttonColor,
  //   width: 125,
  //   height: 35,
  //   textAlign: "center",
  //   paddingTop: 3.5,
  //   borderRadius: 5,
  // },
  confirmar: {
    backgroundColor: "#00CC96",
    borderRadius: 5,
    marginTop: '4%',
    alignSelf: "center",
    justifyContent: "center",
  },
  textConfirmar: {
    color: "#ffffff",
    fontSize: 17,
    fontFamily: "nunito",
    textAlign: "center",
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingBottom: '2%',
    paddingTop:'2%'
  }
});
