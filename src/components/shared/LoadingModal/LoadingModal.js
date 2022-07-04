import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import { Overlay, Text } from 'react-native-elements';
import {} from "./LoadingModal.styles";

export function LoadingModal(props) { 
    const {show, text} = props; 
    return (
        <Overlay> 
            <View>
                <ActivityIndicator size= "large" color= "00a680" />
            </View>
        </Overlay>
    )
}

LoadingModal.defaultProps = {
    show: false,
}