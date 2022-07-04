import React, {useEffect, useState} from 'react'
import { View, Text, Image} from 'react-native'
import {InvitadoVista} from "./InvitadoVista"
import {RegistradoVista} from "./RegistradoVista"
import {getAuth,onAuthStateChanged} from "firebase/auth"
import {} from "../../components"

export  function CuentaVista() {

  const [Accedido, setAccedido]= useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setAccedido (user ? true:false);
    })
  }, [])

  return Accedido ? <RegistradoVista/> : <InvitadoVista/>; 
}
