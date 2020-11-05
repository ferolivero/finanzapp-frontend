import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FooterInformes from './components/footerInformes';

export default function Informes({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.bigContainer}>
                <Text style={styles.subtitulo}>Acá van los informes. Abajo debería tener algo para elegir los distintos informes</Text>
            </View>
            <FooterInformes navigation={navigation} />
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
