import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {AppNavegacion} from "../navigation/AppNavegacion";

export function AppNavegacionVista() {
    return (
      <>
        <NavigationContainer>
          <AppNavegacion />
        </NavigationContainer>
      </>
    );
  }
  