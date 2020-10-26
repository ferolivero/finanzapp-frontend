import React from 'react';
import BotoneraFooter from '../../../global-components/footer';

export default function BotoneraFooterHome({navigation}) {

    return (
        <BotoneraFooter txtLeft="I"
            onPressLeft={() => { console.log("Informes") }}
            imgCenter={require('./btnAgregar.png')}
            onPressCenter={() => { navigation.navigate('Agregar') }}
            txtRight="C"
            onPressRight={() => { console.log("Config") }} />

    );
}