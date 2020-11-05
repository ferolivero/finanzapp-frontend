import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
let fullWidth = Dimensions.get('window').width - 40; //full width

export default function MovRow({ id, fecha, monto, categoria, navigation }) {

    let rowColor = (monto > 0) ? 'rgb(0,128,0)' : 'rgb(255,0,0)';

    return (
        <View><View style={styles.rowWrapperUp}>
            <View style={styles.rowWrapperInterior}>
            <View style={styles.col}><Text style={{ textAlign: 'left', fontSize: 20, color: rowColor, flex: 1 }}>{fecha}:</Text></View>
            <View style={styles.col}><Text style={{ textAlign: 'left', fontSize: 20, color: rowColor, flex: 1, marginLeft: 5 }}>Asado</Text></View>
            </View>
            <View style={styles.col}><Text style={{ textAlign: 'right', fontSize: 20, color: rowColor, flex: 1 }}>{monto}</Text></View>
            <View style={styles.col}><Text style={{ textAlign: 'right', fontSize: 20, color: rowColor, flex: 1, marginLeft: 5 }}>$</Text></View>
        </View>
        <View style={styles.rowWrapperDown}>
        <View style={styles.rowWrapperInterior}>
        <View style={styles.col}><Text style={{ textAlign: 'left', fontSize: 20, color: rowColor, flex: 1 }}>{categoria}</Text></View>
        </View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap',}}>
            <TouchableOpacity style={styles.btnEdit} onPress={()=>navigation.navigate('Movimiento', {id: id.toString()})}>
                <Text style={{ textAlign: 'left', fontSize: 20, color: '#ffffff', flex: 1 }}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBorrar}>
                <Text style={{ textAlign: 'right', fontSize: 20, flex: 1 }}>Borrar</Text>
            </TouchableOpacity>
        </View>
    </View></View>



    );
}

const styles = StyleSheet.create({
    rowWrapperUp: {
        width: fullWidth,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    rowWrapperDown: {
        width: fullWidth,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomWidth: 1
    },
    rowWrapperInterior: {
        width: fullWidth,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    col: {
        flexDirection: 'column',
    },
    btnEdit: {
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 3,
        backgroundColor: 'rgb(0,128,0)'
    },
    btnBorrar: {
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 3,
        marginLeft: 3,
        backgroundColor: 'rgb(255,0,0)',
    }
});