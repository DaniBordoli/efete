import React from 'react'
import { ActivityIndicator , View} from "react-native";
import {headerColor} from './constans'


export const Load = () => {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size={100} color={headerColor} />
    </View>
  );
};
