import React from "react";
import { View, Text, Button, Image,TouchableOpacity} from "react-native";
import CreatedAgentOk from "./createdAgentOk"
import { useSelector } from "react-redux"
import { style } from "./style";

const CreatedAgentOkContainer = () => {

 const agent = useSelector((state) => state.agents.newStore)
console.log('AGENT!!!!', agent)
    return(
        <CreatedAgentOk
         agent={agent}
        />
    )

}

export default CreatedAgentOkContainer