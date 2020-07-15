import React from "react";
import SingleAgentTransaction from "./SingleAgentTransaction";
import { View } from "react-native";

const SingleAgentTransactionContainer = ({ navigation, route }) => {
  return (
    <View>
      <SingleAgentTransaction
        navigation={navigation}
        transaction={route.params.item}
      />
    </View>
  );
};

export default SingleAgentTransactionContainer;
