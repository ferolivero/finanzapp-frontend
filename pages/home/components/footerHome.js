import React from 'react';
import BotoneraFooter from '../../../global-components/footer';

export default function FooterHome({navigation}) {

    return (
        <BotoneraFooter
            txtLeft="I"
            onPressLeft={() => { navigation.navigate('Informes') }}
            imgCenter={require('../../../assets/btnAgregar.png')}
            onPressCenter={() => { navigation.navigate('Movimiento') }}
            txtRight="C"
            onPressRight={() => { navigation.navigate('Configuración') }} />

    );
}