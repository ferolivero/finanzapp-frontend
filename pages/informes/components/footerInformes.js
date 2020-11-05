import React from 'react';
import BotoneraFooter from '../../../global-components/footer';

export default function FooterInformes({navigation}) {

    return (
        <BotoneraFooter
            txtLeft="Movs"
            onPressLeft={() => { navigation.navigate('Movimientos') }}
            imgCenter={require('../../../assets/btnHome.png')}
            onPressCenter={() => { navigation.navigate('Home') }}
            txtRight="C"
            onPressRight={() => { navigation.navigate('Configuración') }} />
    );
}