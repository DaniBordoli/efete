import { StyleSheet, Dimensions } from "react-native";

export const style = StyleSheet.create({
  titulo: {
    fontSize: 36,
    color: "#6F76E4",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 50,
  },
  iniciarSesion: {
    fontSize: 24,
    color: "#6F76E4",
    textAlign: "center",
    marginTop: 50,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    width: Dimensions.get("window").width - 40,
    marginLeft: 20,
    marginRight: 20,
  },
  register: {
    backgroundColor: "#F1F3F6",
  },
  textRegister: {
    color: "#404CB3",
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
    fontSize: 25,
    flex: 1,
    color: "#424242",
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
    textAlign: "center",
    width: Dimensions.get("window").width - 40,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    alignSelf: "center",
  },
  container: {
    flex: 1,
  },
});
