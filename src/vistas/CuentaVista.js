import React from 'react'
import { View, Text, Image} from 'react-native'


export  function CuentaVista() {
  return (
    
    <View style={{ height: '100%' }}>
     
    <Image source={{uri: 'https://www.trecebits.com/wp-content/uploads/2019/04/11854.jpg'}}
       style={{width: '100%', height: 100,justifyContent: 'center', alignItems: 'center',marginBottom: 50,}} />

      <Text style={{textAlignVertical: "center",textAlign: "center",marginBottom: 50,}} >Nombre</Text>

      <Text style={{textAlignVertical: "center",textAlign: "center",marginBottom: 50,}}>Apellido</Text>

      <Text style={{textAlignVertical: "center",textAlign: "center",marginBottom: 50,}}>Contraseña</Text>
    </View>

    
  )
}
