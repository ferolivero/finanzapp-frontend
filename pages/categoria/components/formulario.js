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
import HeaderCategoria from './headerCategoria'
import Constants from 'expo-constants'
import getApiClient from '../../../api/ApiClient'
import CatRow from './catRow'
import GlobalContext from '../../../components/global/context'
import { set } from 'react-native-reanimated'

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
  
  const context = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState('');
  const [tipo, setTipo] = useState(props.categoria.tipo);
  const [nombre, setNombre] = useState(props.categoria.nombre);
  const [opciones, setOpciones] = useState(opAgregar);
  const [categoriasG, setCategoriasG] = useState();
  const [categoriasI, setCategoriasI] = useState();
  const [user, setUser] = useState();
  
  


  const getCategorias = async () => {
    
    if (opciones.subtitulo === 'Agregar') {
    const api = await getApiClient()
    await api.get(`categoria/`).then((response) => {
    let catI = [];
    let catG = [];
      response.data.forEach( function(valor, indice, array) {
        if(valor.tipo == "gasto"){
          catG.push(valor);
          
        }
        else{
          catI.push(valor);
        }
        
      });
      setUser(catG[0].user)
      setCategoriasG(catG)
      setCategoriasI(catI)
      setLoading(false)
    })
    }
    else{
      console.log("asdasda")
      if(tipo == "gasto"){
        console.log("GASTOOOOO")
        setCategoriasG([props.categoria])
        setCategoriasI([])
        console.log(categoriasG)
      }
      else{
        console.log("INGRESO")
        setCategoriasG([])
        setCategoriasI([props.categoria])
      }
    }
    
  }

  
 
  

  useFocusEffect(
    React.useCallback(() => {
      console.log('Desde useEffect')
      console.debug('screen takes focus')
      getCategorias()
      if (props.categoria._id) {
        setOpciones(opEditar)
      }
      return () => console.debug('screen loses focus')
    }, [])
  )

  useEffect(() => {
    if (tipo === 'ingreso') {
      setColor('rgb(0,125,0)')
    } else {
      setColor('rgb(255,0,0)')
    }
  }, [tipo])

  

  const renderItem = ({ item }) => (
      
      <CatRow

      id={item._id}
      tipo={item.tipo}
      nombre={item.nombre}  
      navigation={props.navigation}
      config={context.config}
      cat={item}
      botones={opciones.subtitulo}
      
      
    />
  )

  const guardar = async () => {
    let cat = {
      tipo: tipo,
      nombre: nombre,
      user : user
      
    }
    
    const api = await getApiClient()
    const movURL = 'categoria'
    if (opciones.subtitulo === 'Agregar') {
      await api
        .post(`${movURL}`, cat)
        .then((response) => console.log(response))
        .catch((err) => btnAlert(err.response.data))
    } else {
      await api
        .put(`${movURL}/${props.categoria._id}`, cat)
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
    }
    console.log(cat)
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
          <HeaderCategoria />
          
          <View style={styles.bigContainer}>
              {props.categoria._id ? (
                <Text style={styles.subtitulo}>
                      Categoria Seleccionada
                </Text>
              ):
              (
                <Text style={styles.subtitulo}>
                    Lista de Categorias
                </Text>
              )}
            {props.categoria._id ? (       
                <Text style={styles.textoEdit}>
                <Text style={styles.textoEdit} >
                  {"Nombre: "+nombre}
                  {"\n"}
                  {"\n"}
                </Text>
                <Text numberOfLines={5}>{"Tipo: "+tipo.toUpperCase()}</Text>
                </Text>
              ) : (
                <ScrollView style={styles.scrollView}>
                <Selector
                  onPressAction={setTipo}
                  color={color}
                  posicion={tipo === 'gasto' ? 0 : 1}
                />
                 </ScrollView>
              )}
                       
        
           
              {props.categoria._id ? (

                <Text />
                

                ) :
                (
                <FlatList
              style={styles.flatlist}
              data={tipo === 'gasto' ? categoriasG : categoriasI}
              renderItem={renderItem}
              contentContainerStyle={styles.cardcontainer}
              keyExtractor={(item) => item._id}
              />
                )}
            {props.categoria._id ? (
            <Text style={styles.subtituloEdit}>
                 Editar Categoria
            </Text>
            ) : 
            (
              <Text style={styles.subtitulo}>
              Agregar Categoria
              </Text>
            )}

            {props.categoria._id ? (
              
            <InputTxtBox
                label="Nombre"
                setValue={setNombre}
              />
            ) : 
              (
                <InputTxtBox
                label="Nombre"
                setValue={setNombre}
                /> 
              )}
            
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
  textoEdit: {
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop : 30,
    paddingBottom : 30,
    borderBottomWidth : 1,
  },
  
  subtitulo: {
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
    borderTopWidth : 1
  },
   
  subtituloEdit: {
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
    
  },
  tipoEditable: {
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 19,
     
    },
  flatlist: {
    flex : 1,
    alignSelf: 'center',
    width: fullWidth,
    paddingLeft : 33,
    paddingTop : 33
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
