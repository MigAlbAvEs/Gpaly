import React from 'react'
import { View, TextInput,Text } from 'react-native'
import {Button} from "react-native-elements"
import {vista} from "../../utils"

export function RegistrarseVista(props) {
  const {navigation} = props;

  const irALogin = () => {
    navigation.navigate(vista.Login.Login, {screen: vista.Login.Login})
  }
  return (
    <View>
       <TextInput style={{marginBottom: 50,}}
       placeholder="Nombre"
      />

      <TextInput style={{marginBottom: 50,}}
       placeholder="Apellido"
      />

         
      <TextInput style={{marginBottom: 50,}}
       placeholder="Correo"
      />

      <TextInput style={{marginBottom: 50,}}
           placeholder="Contraseña"
           returnKeyType='go'
           secureTextEntry
           autoCorrect={false}
      />    
       <Button title="Registrarse" onPress={irALogin} />
    </View>
  )
}

