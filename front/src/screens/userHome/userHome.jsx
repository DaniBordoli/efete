import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Link,
  Button,
  ActivityIndicator,
} from "react-native";
import { style } from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";

export default ({ userTransactions, navigation, loading, userRole }) => {
  console.log(userRole)
  
  return (
    <View>
      {loading ? (
        <View>
          <Button
            title="Realizar una Extracción"
            onPress={() => {
              navigation.navigate("SelectAmount");
            }}

            title="Perfil Agente"
            onPress={() => navigation.navigate("Agent")}
          />
          <Text>Movimientos</Text>
          
          <Text>{userTransactions[0].agent[0].name}</Text>
          
          <View>
          <Button
          title='Extracciones'
          onPress={()=> navigation.navigate('selectAmount')}
          />

        {userRole === 'agent' 
        ? 
        <Button
          title='Perfil Agente'
          onPress={()=> navigation.navigate('Agent')}
          />
          :
          <Button
          title='Convertirte en agente'
          onPress={()=> navigation.navigate('CreateAgentForm')}
          />
      }

          </View>
          <FlatList
            keyExtractor={(userTransactions) => userTransactions._id}
            data={userTransactions}
            renderItem={({ item }) => {
              return (
                <View>
                  <Text>Monto: {item.amount}</Text>
                  <Text>
                    Agente: {item.agent[0].name} - {item.agent[0].address}
                  </Text>
                  <Text>Extracción realizada</Text>
                  <Button
                    title="ver transaccion"
                    onPress={() =>
                      navigation.navigate("SingleUserTransaction", {
                        id: item._id,
                      })
                    }
                  />
                </View>
              );
            }}
          ></FlatList>
          <Button
            title="ver todas las operaciones"
            onPress={() =>
              navigation.navigate("AllUserTransactions", {
                userTransactions,
              })
            }
          />
          <Button
          title='Mis cuentas'
          onPress={()=> navigation.navigate('Accounts')}
          />
        </View>
      ) : (
        <View>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
    </View>
  );
};
