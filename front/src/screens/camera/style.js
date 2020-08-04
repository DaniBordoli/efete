import { StyleSheet, Dimensions } from "react-native";
import { headerColor, buttonColor } from "../../Common/constans";

export const style = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: "5%",
    justifyContent: "space-around",
    width: Dimensions.get("window").width / 2,
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    alignItems: "center",
    width: Dimensions.get("window").width / 5,
    borderColor: "#6F76E4",
    borderWidth: 1,
    borderRadius: 4,
    height: 80,
  },
  modal: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: Dimensions.get("window").width / 8,
    marginRight: Dimensions.get("window").width / 8,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: Dimensions.get("window").height / 2.5,
  },
  image: {
    height: Dimensions.get("window").height / 4,
    width: Dimensions.get("window").width / 2,
    backgroundColor: "white",
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});
