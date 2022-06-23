import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {LoginVista} from "../vistas/Login/LoginVista"
import {RegistrarseVista} from "../vistas/Login/RegistrarseVista"  
import {vista} from "../utils"

const Stack = createNativeStackNavigator();

export  function LoginStack() {
    const Opciones = {
        title:"Login"
    };
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name={vista.Login.Login } 
        component={LoginVista} 
        options = {Opciones}
        />
        <Stack.Screen
        name={vista.Login.Registrarse } 
        component={RegistrarseVista} 
        options = {{title:"Registrarse"}}
        />

    </Stack.Navigator>
  )
}
