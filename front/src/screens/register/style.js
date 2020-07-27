import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  inp: {
    borderWidth: 1,
    borderColor: "black",
  },
  text: {
    textAlign: "center",
    fontSize: 15,
    margin: 5,
  },
  register: {
    textAlign: "center",
    color: "blue",
    fontSize: 20,
    margin: 20,
  },

  titulo: {
    fontSize: 64,
    color: "#6F76E4",
    textAlign: "center",
    fontFamily: "nunito",
    marginTop: 50,
  },
  registrarse: {
    fontSize: 24,
    color: "#6F76E4",
    textAlign: "center",
    marginTop: 50,
    fontFamily: "nunito",
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 20,
    height: 320,
    marginTop: 30,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 18,
    elevation: 5,
  },

  hr: {
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    display: "flex",
    alignSelf: "center",
    width: 370,
  },
  botonIniciar: {
    backgroundColor: "#5352EC",
    width: 167,
    height: 48,
  },
  tituloIniciar: {
    color: "#FFFFFF",
    textTransform: "uppercase",
    fontFamily: "nunito",
  },
  botonRegister: {
    backgroundColor: "#F1F3F6",
    width: 167,
    height: 48,
  },
  tituloRegister: {
    color: "#404CB3",
    textTransform: "uppercase",
    fontFamily: "nunito",
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    fontSize: 18,
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },
  container: {
    flex: 1,
  },
  border: {
    backgroundColor: "#FFFFFF",
    width: 150,
    margin: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#DDDDDD",
    height: 37,
    justifyContent: "center",
  },
  alerta: {
    fontSize: 15,
    color: "#DDDDDD",
    fontStyle: "italic",
    fontWeight: "bold",
    paddingLeft: 10,
  },
});
