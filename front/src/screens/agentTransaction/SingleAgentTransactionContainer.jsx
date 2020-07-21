import React from "react";
import SingleAgentTransaction from "./SingleAgentTransaction";
import { View } from "react-native";

export default SingleAgentTransactionContainer = ({ navigation, route }) => {
  return (
    <View>
      <SingleAgentTransaction
        navigation={navigation}
        transaction={route.params.item}
      />
    </View>
  );
};


