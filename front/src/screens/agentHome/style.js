import { StyleSheet } from "react-native";
import { headerColor } from "../../Common/constans";

export const style = StyleSheet.create({
  movimientos: {
    fontSize: 30,
    marginTop: 15,
    marginBottom: 5,
    textAlign: "center",
    fontFamily: "nunito",
    color: `${headerColor}`,
  },
  movimientosContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    width: "94%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8.0,
    elevation: 5,
  },

  agente: {
    margin: 6,
    width: 164,
    height: 140,
    backgroundColor: "white",
    justifyContent: "center", //
    alignItems: "center", //
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8.0,
    elevation: 5,
  },

  imageIconStyle: {
    padding: 10,
    height: 67,

    width: 67,
    resizeMode: "stretch",
  },
  text: {
    textAlign: "center",
    color: "black",
    fontSize: 14,
    textTransform: "uppercase",
    //fontFamily: "sans-serif",
    marginTop: 13,
  },
  hr: {
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    display: "flex",
    alignSelf: "center",
    width: "100%",
    marginBottom: 5,
    marginTop: 5,
  },
  time: {
    color: "#A8C3EC",
    fontSize: 17,
    textAlign: "center",
    marginBottom: 15,
  },
  single: {
    backgroundColor: "#F4F9FE" /* #629bcaa6 */,
    flexDirection: "row",
    height: 100,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    flex: 1,
    elevation: 2,
    marginBottom: 5,
  },
  contenido: {
    flex: 3,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  monto: {
    flex: 2,
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
  },
  montoTexto: {
    fontFamily: "lato",
    fontSize: 21,
    color: headerColor,
    marginLeft: 20,
  },
  entrar: {
    flex: 1,
    alignItems: "flex-end",
    height: "100%",
    justifyContent: "center",
    marginRight: 5,
  },
  textoContenido: {
    fontFamily: "lato",
    fontSize: 14,
    color: "#3D5E87",
    alignSelf: "flex-start",
    paddingLeft: 20,
    marginBottom:3
  },
});
