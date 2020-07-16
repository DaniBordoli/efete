import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ActivityIndicator,
} from "react-native";

const Accounts = ({ accountsUser, loading, navigation }) => {
  return (
    <View>
      {loading ? (
        <View>
          <Text> CUENTAS PRINCIPALES</Text>
          <FlatList
            keyExtractor={(account) => account._id}
            data={accountsUser}
            renderItem={({ item }) => {
              return (
                <Button
                  //   style={style.button}
                  title={item.nameEntity}
                  onPress={() =>
                    navigation.navigate("SingleAccount", {
                      account: item,
                    })
                  }
                />
              );
            }}
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

const styles = StyleSheet.create({});

export default Accounts;
