import { StyleSheet } from "react-native";
import { headerColor, buttonColor } from "../../Common/constans";

export const style = StyleSheet.create({
  movimientos: {
    fontSize: 28,
    marginTop: 15,
    marginBottom: 13,
    textAlign: "center",
    fontFamily: "nunito",
    color: `${headerColor}`,
  },
  ver: {
    backgroundColor: "white",
    borderWidth:1,
    borderColor:buttonColor,
    width: "60%",
    alignSelf: "center",
    marginTop: 10,
  },
  text:{
      fontSize:15,
      fontFamily:'regular'
  }
});
