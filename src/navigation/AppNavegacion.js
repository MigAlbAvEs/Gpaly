import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Icon} from "react-native-elements";
import {LoginStack} from "./LoginStack";
import {MapaStack} from "./MapaStack";
import { CuentaStack } from "./CuentaStack";
import {vista} from "../utils";


const Tab = createBottomTabNavigator();

export function AppNavegacion(){
    return(
        <Tab.Navigator 
        screenOptions={({route}) => ({
            headerShown:false,
            tabBarActiveTintColor: "#224e79",
            tabBarInactiveTintColor: "#7c7c7c",
            showIcon: true,
            tabBarIcon: ({ color, size}) => screenOptions(route, color, size),
        })}>
            <Tab.Screen 
                name={vista.Login.tab} 
                component={LoginStack} 
                options={{title: "Login"}}
            />
            <Tab.Screen 
                name={vista.Mapa.tab} 
                component={MapaStack}  
                options={{title: "Mapa"}}
            />
            <Tab.Screen 
                name={vista.Cuenta.tab} 
                component={CuentaStack}  
                options={{title: "Cuenta"}}/>

        </Tab.Navigator>
    );
}

function screenOptions (route, color, size){
    let iconName;
    if(route.name === vista.Login.tab)
        iconName = "login";
    
    if(route.name === vista.Mapa.tab)
        iconName = "google-maps";
    
    if(route.name === vista.Cuenta.tab)
        iconName = "account";

    return(
       <Icon type="material-community" name={iconName} color={color} size={size} />
    )
}
