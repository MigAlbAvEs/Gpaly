import React from 'react'
import { View, Text } from 'react-native'
import {styles} from "./RegistroVista.styles"
import {Image} from 'react-native-elements'

export function RegistroVista() {
  return (
    <View>
      <Image source={require("../../../../assets/img/anya-forger-spy-x-family_1280x720_xtrafondos.com.jpg")} style={styles.image}/>
      <View style= {styles.content}>

      </View>
      <Text>RegistradoVista</Text>
    </View>
  )
}
