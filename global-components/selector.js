import React, {useEffect, useRef} from 'react';
import SwitchSelector from "react-native-switch-selector";


export default function Selector({ onPressAction, color, posicion }) {
    const switchRef = useRef(posicion);

    useEffect(()=>{
        switchRef.current?.toggleItem(posicion);
    }, [posicion])
    
    return (
        <SwitchSelector
            ref={switchRef}
            initial={0}
            selectedColor='rgb(255,255,255)'
            onPress={value => onPressAction(value)}
            buttonColor={color}
            borderColor='rgb(0,0,0)'
            height={50}
            fontSize={25}
            backgroundColor={'#D3D3D3'}
            hasPadding
            options={[
                { label: "Gasto", value: "gasto" },
                { label: "Ingreso", value: "ingreso" }
            ]}
        />
    );
}