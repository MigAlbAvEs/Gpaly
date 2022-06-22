import { View, Text } from 'react-native'
import React from 'react'
import {Button} from "react-native-elements"
import {vista} from "../../utils"

export function RestauranteVista(props) {
  console.log(props)
  const {navigation} = props;
  const irARestaurante = () => {
    navigation.navigate(vista.Restaurante.AgregaRestaurante, {screen: vista.Restaurante.Restaurante})
  }

  return (
    <View>
      <Text>Iniciar sesión</Text>
      <Button title="Registrate" onPress={irARestaurante} />
    </View>
  )
}