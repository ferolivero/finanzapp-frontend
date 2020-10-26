import React from 'react';
import BotoneraFooter from '../../../global-components/footer';

export default function BotoneraFooterHome() {

    return (
        <BotoneraFooter txtLeft="I"
            onPressLeft={() => { console.log("Informes") }}
            txtCenter="+"
            onPressCenter={() => { console.log("Agregar") }}
            txtRight="C"
            onPressRight={() => { console.log("Config") }} />

    );
}