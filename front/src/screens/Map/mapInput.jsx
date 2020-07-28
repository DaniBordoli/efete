import React from 'react'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'


export default (props)=>{


return(
<GooglePlacesAutocomplete
placeholder="buscar"
returnKeyType={'search'}
listViewDisplayed={false}
fetchDetails={true}
onPress={(data,detail = null)=>{
props.notifyChange(detail.geometry.location)
}}
query={{key:'AIzaSyBV-TT8w7N3TC9LDFGIQOk9BmN1iX10arg'}}
nearbyPlacesAPI='GooglePlacesSearch'
debounce={200}
/>

)

}