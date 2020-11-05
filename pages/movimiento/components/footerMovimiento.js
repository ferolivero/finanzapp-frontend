import React from 'react';
import BotoneraFooter from '../../../global-components/footer';

export default function FooterMovimiento({navigation}) {

    return (
        <BotoneraFooter
            txtLeft="I"
            onPressLeft={() => { navigation.navigate('Informes') }}
            imgCenter={require('../../../assets/btnHome.png')}
            onPressCenter={() => { navigation.navigate('Home') }}
            txtRight="C"
            onPressRight={() => { navigation.navigate('Configuración') }}/>
    );
}