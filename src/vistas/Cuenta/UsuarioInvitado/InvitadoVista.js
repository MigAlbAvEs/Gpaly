import React from 'react'
import {useNavigation} from '@react-navigation/native'
import { View, ScrollView } from 'react-native';
import {styles} from "./InvitadoVista.styles";
import {Text, Button, Image} from 'react-native-elements'
import {vista} from "../../../utils"

export function InvitadoVista() {

  const navigation= useNavigation();

  const irALogin = () => {
    navigation.navigate(vista.Cuenta.Login);
  }
  
  return (
    <ScrollView centerContent= {true} style={styles.content}>
      <Image source={require("../../../../assets/img/anya-forger-spy-x-family_1280x720_xtrafondos.com.jpg")} style={styles.image}/>
      <Text style={styles.title}> Consultar tu perfil </Text>
      <Text style={styles.descripcion}>Describe tu coso fav y busca similares</Text>

      <Button
      title="Ver coso"
      onPress={irALogin}
      buttonStyle={styles.btnStyle} />

    </ScrollView>
  )
}
