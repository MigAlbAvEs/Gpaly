import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {View, ScrollView} from 'react-native'
import {Text, Image} from 'react-native-elements'
import {styles} from "./LoginVista.styles";
import { vista } from '../../../utils';

export function LoginVista() {
    
    const navigation = useNavigation();

    const IrARegistro = () => {
        navigation.navigate(vista.Cuenta.Register)
    }
    return (
        <ScrollView>
            <Image source={require("../../../../assets/img/anya-forger-spy-x-family_1280x720_xtrafondos.com.jpg")} style={styles.image}/>
            
            <View style={styles.content}>
                
            <Text>LoginVista</Text>
            <Text onPress={IrARegistro}> Registrarse </Text>

            </View>
           
        </ScrollView>
    )
}