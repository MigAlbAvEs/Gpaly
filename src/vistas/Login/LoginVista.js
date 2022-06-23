import { View, TextInput } from 'react-native'
import React from 'react'
import {Button} from "react-native-elements"
import {vista} from "../../utils"

export function LoginVista(props) {
  const {navigation} = props;

  const irARegistrarse = () => {
    navigation.navigate(vista.Login.Registrarse, {screen: vista.Login.Login})
  }

    const irACuenta = () => {
      navigation.navigate(vista.Mapa.Mapa, {screen: vista.Mapa.Mapa})
  }

  return (
    <View>

      <TextInput style={{marginBottom: 50,}}
       placeholder="Correo"
      />

      <TextInput style={{marginBottom: 50,}}
           placeholder="Contraseña"
           returnKeyType='go'
           secureTextEntry
           autoCorrect={false}
/>    

      <Button style={{marginBottom: 50,}} title="Iniciar Sesión" onPress={irACuenta} />
      <Button title="Registrarse" onPress={irARegistrarse} />
    </View>
  )
}