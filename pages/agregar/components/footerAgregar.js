import React from 'react';
import BotoneraFooter from '../../../global-components/footer';

export default function BotoneraFooterAgregar({navigation}) {

    return (
        <BotoneraFooter txtLeft="I"
            onPressLeft={() => { console.log("Informes") }}
            imgCenter={require('./btnHome.png')}
            onPressCenter={() => { navigation.navigate('Home') }}
            txtRight="C"
            onPressRight={() => { console.log("Config") }} />
    );
}