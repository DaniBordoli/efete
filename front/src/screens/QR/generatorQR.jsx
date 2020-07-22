import React, { useState , useEffect} from "react";
import { QRCode } from "react-native-custom-qr-codes-expo";
import {fetchAgent } from '../../redux/store/actions/agents'
import { headerColor } from "../../Common/constans";
import { StyleSheet, View, Text } from "react-native";
import { useSelector , useDispatch} from "react-redux";

export default ({navigation})=> {
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchAgent(userId))
/*     setLoading(true)
 */  }, []);
  

  const userId = useSelector((state) => state.users.user._id);
  const agentId= useSelector((state) => state.agents.agent._id)


  /* const [user, userSet] = useState('')
  const [loading, setLoading] = useState(false); */


  console.log("USEER:", userId)
  console.log("AGENTEEEEEE:", agentId)
    return (
      <View style={{flex:1}}>

<View style={{flex:1, justifyContent:'center'}}>
  <Text style={styles.texto}>Escanea el codigo y retira tu dinero</Text>
</View>
<View style={styles.container}>
        <QRCode
          content= {`${agentId}`} 
          /* `${{
            fecha: "132",
            dato: "13132"
          }}` */
        />
      </View>
      <View style={{flex:1}}>
  
</View>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginRight:30,
    marginLeft:30,
    marginBottom:20,
    marginTop:20
  },
  texto: {
    marginLeft:36,
    marginRight:36,
    fontSize: 28,
    marginTop: 15,
    marginBottom: 13,
    textAlign: "center",
    fontFamily: "nunito",
    color: headerColor,
    textAlign:'center'
  },
  texto2:{
    fontSize:21,
    color:'#4F9FFF',
    marginTop:20,
    textAlign:'center'
  }
});
