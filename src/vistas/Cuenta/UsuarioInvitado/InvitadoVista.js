import React from 'react'
import { View, ScrollView } from 'react-native';
import {styles} from "./InvitadoVista.styles";
import {Text, Button, Image} from 'react-native-elements'

export function InvitadoVista() {

  const irALogin = () => {
    console.log("Ir a login");
  }
  
  return (
    <ScrollView centerContent= {true} style={styles.content}>
      <Image source={require("../../../../assets/img/anya-forger-spy-x-family_1280x720_xtrafondos.com.jpg")} style={styles.imagen}/>
      <Text style={styles.title}> Consultar tu perfil </Text>
      <Text style={styles.descripcion}>Describe tu coso fav y busca similares</Text>

      <Button
      title="Ver coso"
      onPress={irALogin}
      buttonStyle={styles.btnStyle} />

    </ScrollView>
  )
}
