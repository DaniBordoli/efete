import { StyleSheet, Dimensions } from "react-native";

export const style = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    width: '90%'
  },
  title: {
    fontFamily: "nunito",
    color: "#6F76E4",
    fontSize: 60,
    marginBottom:'5%',
  },
  subTitle: {
    fontSize: 20,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '7%',
    marginBottom: '7%',
    width: '80%',
    textAlign: "center",
    color: "#424242",
  },
  ok: {
    width: 90,
    height: 90,
  },
  datos: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    width: '90%',
    paddingLeft:'7%',
    paddingRight:'7%',
    paddingTop:'7%',
    paddingBottom:'12%',
    elevation: 2,
    shadowRadius: 4.0,
    shadowOpacity: 0.5,
    marginBottom: 10,
  },
  datosTitle: {
    fontSize: 20,
    marginTop: '3%',
    marginBottom: '3%',
    fontWeight: "bold",
    color: "#5A5A5A",
  },
  image: {
    width: 200,
    height: 150,
    margin: '5%',
    borderRadius: 20,
  },
  caja: {
    borderBottomWidth: 1,
    borderBottomColor: "#C7C7C7",
    flexDirection: "row",
    width: '95%',
    justifyContent: "space-around",
    paddingBottom:'3%',
    paddingTop:'3%',
  },
  info: {
    margin: '2%',
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    margin: '2%',
    color: "#424242",
    fontSize: 16,
  },
  clearIcon: {
    marginTop: '10%',
    marginRight: '3%',
    alignItems: "flex-end",
  },
});
