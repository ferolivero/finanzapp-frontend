import React, { useEffect, useState, useContext } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Text,
  ScrollView,
  Button,
  KeyboardAvoidingView,
} from 'react-native'
import Selector from '../../../global-components/selector'
import InputTxtBox from '../../../global-components/inputTxtBox'
import Row2Botones from '../../../global-components/row2Botones'
import HeaderTarjetas from './headerTarjetas'
import Constants from 'expo-constants'
import getApiClient from '../../../api/ApiClient'
import TarRow from './tarRow'
import GlobalContext from '../../../components/global/context'
import { set } from 'react-native-reanimated'
import { BorderlessButton } from 'react-native-gesture-handler'

let fullWidth = Dimensions.get('window').width //full width

const opAgregar = {
  subtitulo: 'Agregar',
  label2: 'Borrar',
}
const opEditar = {
  subtitulo: 'Editar',
  label2: 'Cancelar',
}

export default function Formulario(props) {
  
  const context = useContext(GlobalContext)
  const [loading, setLoading] = useState(true)
  const [tarjetas, setTarjetas] = useState()
  const [nombre, setNombre] = useState(props.tarjeta.nombre)
  const [descripcion, setDescripcion] = useState(props.tarjeta.descripcion)
  const [opciones, setOpciones] = useState(opAgregar)
  const [user, setUser] = useState()



  const getAllTarjetas = async () => {
    if (opciones.subtitulo === 'Agregar'){
      getTarjetas(`tarjeta`)
    
    }
    else{
      setTarjetas([props.tarjeta])
      setNombre(props.tarjeta.nombre)
      setDescripcion(props.tarjeta.descripcion)
    }
  }


  const getTarjetas = async (url) => {
    setLoading(true)
    const api = await getApiClient()
    await api
      .get(url)
      .then((response) => {
        setTarjetas(response.data)
        setLoading(false)
        setUser(response.data.user)
      })
      .catch((err) => console.log(err.message))
  }

 

  useFocusEffect(
    React.useCallback(() => {
      console.log('Desde useEffect')
      console.debug('screen takes focus')
      getAllTarjetas()
      if (props.tarjeta._id == null){
        console.log("AGREGARRRRRRRR")
        setOpciones(opAgregar)
      }
      else{
        console.log("EDITAR")
        setOpciones(opEditar)
      }
      return () => console.debug('screen loses focus')
    }, [])
  )

  

  const renderItem = ({ item }) => (
    <TarRow
      tar={item}
      config={context.config}
      navigation={props.navigation}
      botones={opciones.subtitulo}
    />
  )

  const guardar = async () => {
    let tar = {      
      nombre: nombre,
      descripcion : descripcion,
      user : user
      
    }
    console.log("asdasdasd");
    console.log({tar})
    const api = await getApiClient()
    const movURL = 'tarjeta'
    if (opciones.subtitulo === 'Agregar') {
      await api
        .post(`${movURL}`, tar)
        .then((response) => console.log(response))
        .catch((err) => btnAlert(err.response.data))
    } else {
      await api
        .put(`${movURL}/${props.tarjeta._id}`, tar)
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
    }
    console.log(tar)
    props.navigation.navigate('Config')
  }
  const reset = () => {
    
  }



  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <HeaderTarjetas />
          
          <View style={styles.bigContainer}>
            {props.tarjeta._id ? (
              <Text style={styles.subtitulo}>
                    Tarjeta Seleccionada
              </Text>
            ):
            (
              <Text style={styles.subtitulo}>
                  Lista de Tarjetas
              </Text>
            )}
            {props.tarjeta._id ? (

                <Text style={styles.textoEdit}>
                <Text style={styles.textoEdit} >
                  {"Nombre: "+nombre}
                  {"\n"}
                  {"\n"}
                </Text>
                <Text numberOfLines={5}>{"Descripcion: "+descripcion}</Text>
                </Text>
            
              ) :
              (
                <FlatList
              style={styles.flatlist}
              data={tarjetas}
              renderItem={renderItem}
              contentContainerStyle={styles.cardcontainer}
              keyExtractor={(item) => item._id}
              />
              )}
              {props.tarjeta._id ? (
            <Text style={styles.subtitulo}>
                 Editar Tarjeta
            </Text>
            ) : 
            (
              <Text style={styles.subtitulo}>
              Agregar Tarjeta
              </Text>
            )}
            {props.tarjeta._id ? (
              
                <InputTxtBox
                style={styles.container}
                label="Nombre"
                setValue={setNombre}
                /> 
                ) : 
              (
                <InputTxtBox
                style={styles.container}
                label="Nombre"
                setValue={setNombre}
                /> 
              )}
            <View>
                <InputTxtBox
                  label="Descripcion"
                  setValue={setDescripcion}
                      
              />
            </View>
            <Row2Botones
                label1="Guardar"
                action1={guardar}
                label2={opciones.label2}
                action2={reset}
              />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: Constants.statusBarHeight,
  },
  bigContainer: {
    flex: 1,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    width: fullWidth,
  },
  
  subtitulo: {
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
  },
  textoEdit: {
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop : 30,
    paddingBottom : 30,
    borderTopWidth : 1,
    borderBottomWidth : 1
  },
  tipoEditable: {
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 5,
    paddingTop: 5,
    borderWidth: 1,
    borderRadius: 19,
  },
  flatlist: {
    flex : 1,
    alignSelf: 'center',
    width: fullWidth,
    paddingLeft : 33
  },
  scrollView:{
    marginBottom: -300,
  },
  cardcontainer: {
    flex: 0,
    width: fullWidth,
   },
   buttonAgregar:{
     fontSize: 25,
    textAlign: 'center',
    paddingBottom: 5,
    paddingTop: 5,
    borderWidth: 1,
    borderRadius: 19,
   }
  
  
})
