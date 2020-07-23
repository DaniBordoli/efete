import { StyleSheet } from "react-native";
import { headerColor } from "../../Common/constans";

export const style = StyleSheet.create({
  movimientos: {
    fontSize: 28,
    marginTop: 15,
    marginBottom: 13,
    textAlign: "center",
    fontFamily: "nunito",
    color: `${headerColor}`,
  },
  movimientosContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius:28,
    borderTopLeftRadius:28,
    width: "94%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8.0,
    elevation:5

  },
  agente: {
    width: 164,
    height: 140,
    backgroundColor: "white",
    margin: 13,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8.0,
    elevation:5
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
    fontSize: 14,
    textAlign: "center",
    marginBottom:15
  },
});
