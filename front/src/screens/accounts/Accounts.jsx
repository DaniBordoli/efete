import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, ActivityIndicator} from 'react-native';



const Accounts = ({accountsUser,loading,handleDelete}) => {
    console.log("accountsuser",accountsUser)

    return (
        <View>
            {loading?
            <View> 
                <Text> CUENTAS ASOCIADAS</Text>
                
            <FlatList
                keyExtractor={(accountsUser) => accountsUser._id}
                data={accountsUser}
                renderItem={({ item,index }) => {
                  return (
                    <View>
                      <Text>Entidad: {item.nameEntity}</Text>
                      <Text>Cuenta: {item.accountNumber}
                      <Button
                        title="ELIMINAR CUENTA"
                        onPress={() =>
                        {console.log('item',item._id)
                        handleDelete(item._id)}
                        }
                      />
                      </Text>
                      
                    </View>
                  );
                }}
              ></FlatList>
            </View> : 
                <View>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
                    
            }

        </View>
    )
}

const styles = StyleSheet.create({

})

export default Accounts;
