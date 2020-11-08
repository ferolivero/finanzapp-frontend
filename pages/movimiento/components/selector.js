import React from 'react';
import SwitchSelector from "react-native-switch-selector";


export default function Selector({ onPressAction, color, posicion, disabled }) {
    return (
        <SwitchSelector
            initial={posicion}
            selectedColor='rgb(255,255,255)'
            onPress={value => onPressAction(value)}
            buttonColor={color}
            borderColor='rgb(0,0,0)'
            height={50}
            fontSize={25}
            backgroundColor={'#D3D3D3'}
            hasPadding
            disabled={disabled}
            options={[
                { label: "Gasto", value: "gasto" },
                { label: "Ingreso", value: "ingreso" }
            ]}
        />
    );
}