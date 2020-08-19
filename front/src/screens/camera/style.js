import { StyleSheet, Dimensions } from "react-native";
import { headerColor, buttonColor } from "../../Common/constans";

export const style = StyleSheet.create({
  mainContainer:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsContainer: {
    flex: 2,
    flexDirection: "row",
    marginTop: "1%",
    justifyContent: "space-around",
    width: '70%',
  },
  button: {
    alignItems: "center",
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignContent: 'center',
    borderColor: "#6F76E4",
    borderWidth: 1,
    borderRadius: 4,
    padding: '1%',
    margin: '1%'
    
  },
  textBtn:{
     fontSize: 15,
     margin:'3%',
     alignSelf: 'center'
  },
  modal: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "5%",
    marginRight: "5%",
    height: '60%',
    backgroundColor: "white",
    borderRadius: 10,
    padding: '7%',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // height: Dimensions.get("window").height / 2.5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: '4%',
  },
  image: {
    height: '90%',
    width: '90%',
    backgroundColor: "white",
    borderRadius: 10,
  },
  confirm:{
    marginTop: '2%',
    color: "#00CC96"
  }
});
