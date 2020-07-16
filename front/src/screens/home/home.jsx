import React, { useEffect } from "react";
import { View, Text , Button} from "react-native";

export default ({ navigation }) => {


  return (
  
    <View>
      <Text> PANTALLA HOME </Text>
      <Button
                onPress={() => navigation.navigate("EditUserProfile")}
                title="Go To Details"
            />
            <Button
                onPress={() => navigation.navigate("Verificar")}
                title="Go To Details"
            />
    </View>
  );
};
