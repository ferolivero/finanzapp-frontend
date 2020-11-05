import React from 'react';
import BotoneraFooter from '../../../global-components/footer';

export default function FooterConfiguracion({navigation}) {

    return (
        <BotoneraFooter
            txtLeft="I"
            onPressLeft={() => { navigation.navigate('Informes') }}
            imgCenter={require('../../../assets/btnHome.png')}
            onPressCenter={() => { navigation.navigate('Home') }}
            txtRight="Movs"
            onPressRight={() => { navigation.navigate('Movimientos') }}/>
    );
}