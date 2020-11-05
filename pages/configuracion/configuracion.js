import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FooterConfiguracion from './components/footerConfiguracion';

export default function Informes({ navigation }) {

    const loguot = () => {
        console.log("Se borra el JWT del storage");
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <View style={styles.bigContainer}>
                <Text style={styles.subtitulo}>Acá van las configuraciones</Text>
                <Buttom onPress={logout}>Cerrar sesión</Buttom>
            </View>
            <FooterConfiguracion navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    bigContainer: {
        flex: 1,
        padding: 10,
        paddingTop: 0
    },
    flatlist: {
        alignSelf: 'center',
    },
    subtitulo: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10
    }
});
