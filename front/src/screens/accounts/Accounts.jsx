import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, ActivityIndicator} from 'react-native';



const Accounts = ({accountsUser,loading}) => {
    console.log("accountsuser",accountsUser)

    return (
        <View>
            {loading?
            <View> 
                <Text> CUENTAS PRINCIPALES</Text>
                <FlatList
                    keyExtractor={(data) => data}
                    data={data}
                    renderItem={({ item }) => {
                    return (
                        <Button
                        style={style.button}
                        title={`$ ${item}`}
                        onPress={() => handleValue(item)}
            />
          );
        }}
      />
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
