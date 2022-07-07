import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CuentaVista }  from "../vistas/Cuenta/CuentaVista";
import {vista} from "../utils";
import { LoginVista }  from "../vistas/Cuenta/VistaLogin";
import {RegistroVista} from "../vistas/Cuenta/VistaRegistro"

const Stack = createNativeStackNavigator();

export function CuentaStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name={vista.Cuenta.Cuenta } 
        component={CuentaVista} 
        options = {{title:"Cuenta"}}
        />

        <Stack.Screen
        name={vista.Cuenta.Login}
        component={LoginVista}
        options= {{title:"Iniciar sesion"}}
        />

        <Stack.Screen
        name={vista.Cuenta.Register}
        component={RegistroVista}
        options= {{title:"Registro"}}
        />
    </Stack.Navigator>
  )
}