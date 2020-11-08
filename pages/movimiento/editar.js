import React from 'react';
import Formulario from './components/formulario';

export default function Editar({ navigation, route }) {
    
 const mov = { _id: route.params.id, tipo: 'ingreso', monto: route.params.id, descripcion: 'Chocolate', fecha: new Date(Date.now()), categoria: 'Comida' };
//Acá hay que meter un loader hasta que traiga el movimiento desde la base de datos. Y recién ahí mostrar el formulario.
    return (
        <Formulario navigation={navigation} movimiento={mov} />
    );
}
