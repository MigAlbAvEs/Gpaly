import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
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
    <View style = {styles.container}>

      <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Correo"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
              />

      <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Contraseña"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
              secureTextEntry
             autoCorrect={false}/>    

        <TouchableOpacity>
      <Button style={{marginBottom: 50,
      padding: 10,
      margin: 15,
      width: 300,   
      height: 40,}} title="Iniciar Sesión" onPress={irACuenta} />

      <Button  color="#7a42f4" style={{marginBottom: 50,
      
      padding: 10,
      margin: 15,
      width: 300,   
      height: 40,}} title="Registrarse" onPress={irARegistrarse} />
      </TouchableOpacity>
    </View>
  )
}

export default LoginVista

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      width: 300,
      borderColor: '#7a42f4',
      borderWidth: 2,
      justifyContent: 'center', 
      alignItems: 'center',
      textAlignVertical: "center",
      textAlign: "center"
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
  })