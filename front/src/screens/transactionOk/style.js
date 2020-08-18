import { StyleSheet, Dimensions } from "react-native";
import { headerColor, buttonColor } from "../../Common/constans";

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  clearIcon: {
    marginTop: "2%",
    marginRight: "3%",
    alignSelf: "center",
  },
  titulo: {
    color: "#6F76E4",
    fontSize: 26,
    fontFamily: "nunito",
    margin: "3%",
    textAlign: "center",
    textTransform: "uppercase",
  },
  icon: {
    width: 150,
    height: 150,
    marginTop: "4%",
    marginBottom: "15%",
    alignItems: "center",
  },
  text: {
    fontFamily: "nunito-bold",
    fontSize: 26,
    marginTop: "4%",
    textTransform: "uppercase",
  },
  text1: {
    fontSize: 20,
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: "2%",
    fontFamily: "nunito",
    textAlign: "center",
  },
  text2: {
    fontSize: 50,
    marginTop: "3%",
    fontFamily: "nunito",
    color: "#00CC96",
    marginBottom: "1%",
  },
  text3: {
    fontSize: 20,
    marginTop: "1%",
    fontFamily: "regular",
    color: "black",
  },
  content: {
    fontSize: 20,
    marginTop: "5%",
    fontWeight: "bold",
    fontFamily: "nunito-bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  confirmar: {
    backgroundColor: "#00CC96",
    padding: "4%",
    borderRadius: 3,
    width: "100%",
    marginTop: "10%",
    alignSelf: "center",
    marginBottom: "2%",
  },
  tituloConfirmar: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
  },
  hr: {
    width: "80%",
    borderTopColor: "#808080",
    borderTopWidth: 1,
  },
});
