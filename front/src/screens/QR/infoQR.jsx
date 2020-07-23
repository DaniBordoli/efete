import React from "react";
import { headerColor } from "../../Common/constans";
import { StyleSheet, View, Text , Image} from "react-native";

export default () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1.3, justifyContent:'center'}}>
      <View style={{marginTop:50,alignItems:'center'}}>
      <Text style={styles.texto}>Qué es el codigo QR</Text>

<Image
          source={{
            uri: "https://borealtech.com/wp-content/uploads/2018/10/codigo-qr-1024x1024.jpg",
          }}
        style={styles.imageIconStyle}
      />
      <Text style={styles.texto3}>El QR es un código único vinculado a tu cuenta de Efeté que te permite cobrar de un modo simple, rápido y seguro</Text>
      </View>
      </View>
      <View style={{ flex: 1 , justifyContent:'flex-end'}}>
      <Text style={styles.texto2}>Cobrar con QR</Text>

        <Text style={styles.texto3}>El codigo QR suele estar impreso en un cartel con el logo de Efete. Podes encontrar codigos QR en todos los locales Agentes.</Text>
      </View>

      <View style={{ flex: 1 , justifyContent:'center'}}>
      <Text style={styles.texto2}>¿Por qué cobrar con QR?</Text>

        <Text style={styles.texto3}>⚫︎ Solo necesitas la app de Efete.</Text>
        <Text style={styles.texto3}>⚫︎ Lo generás vos, sin trámites ni costos. </Text>
        <Text style={styles.texto3}>⚫︎ Rapidez y seguridad como factores clave.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    marginLeft: 36,
    marginRight: 36,
    fontSize: 25,
    textAlign: "center",
    color: "black",
    textAlign: "center",
    fontWeight:'500'
  },
  texto2: {
    fontSize: 25,
    color: "#6f76e4",
    marginBottom:20,
    marginLeft:10,
    fontWeight:'200'
  },
  imageIconStyle: {
    padding: 10,
    height: 150,
marginTop:20,
    width: 150,
    marginBottom:15
   
  },
  texto3:{
      marginLeft:17,
      marginRight:20,
      fontSize:16,
      marginBottom:3,
      fontFamily:"delgado"
      
  }
});


/* 
Abrí la app y buscá en el mapa el local al que necesites ir hoy.


Cuando estés en el negocio, seleccioná Código QR.


Escaneá el QR y pagá con débito, crédito o dinero en Mercado Pago. */