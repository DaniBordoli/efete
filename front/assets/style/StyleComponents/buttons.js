import styled from 'styled-components'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import React ,{useState} from "react";

/* const fetchFonts = () => {
    return Font.loadAsync({
    'nunito': require('../../fonts/Nunito-Black.ttf')
    });
    };
  
  
  export default () => {
    const [dataload, setDataload]= useState(false)
  
    if(!dataload){
      return (
        <AppLoading
        startAsync={fetchFonts}
        onFinish={()=> setDataload(true)}
        />
      )
    }
} */

    
export const Texto=styled.Text`
font-style: normal;
font-weight: bold;
font-size: 18px;
color:white;
text-transform: uppercase
`

export const ButtonPrimary = styled.TouchableOpacity`
	width: 167px;
	height: 48px;
    border-radius: 4px;
    background-color: #5352EC;
    display: flex;
    align-items: center;
    justify-content:center
`;


export const ButtonDelete = styled.TouchableOpacity`
	width: 100px;
	height: 40px
	padding: 12px;
	border-radius: 10px;	
	background-color: red;
`;



export const ButtonConfirm= styled.TouchableOpacity`
	width: 100px;
	height: 40px
	padding: 12px;
	border-radius: 10px;	
	background-color: red;
`;
