import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  titulo: {
    fontSize: 64,
    color: "#6F76E4",
    textAlign: "center",
    fontWeight: "bold",
    marginTop:50
  },
  iniciarSesion: {
    fontSize: 24,
    color: "#6F76E4",
    textAlign: "center",
    marginTop: 50,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    marginLeft: 15,
    marginRight: 15,   
     borderRadius: 20,
    height: 130,
    marginTop: 30,
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
   flex:1,
  },
});
