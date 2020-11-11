import AsyncStorage from '@react-native-async-storage/async-storage'

export async function storeData(key, value) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.log(error)
  }
}

export async function getData(key) {
  try {
    return JSON.parse(await AsyncStorage.getItem(key))
  } catch (error) {
    console.log(error)
  }
}

export async function deleteData(key) {
  try {
    return await AsyncStorage.removeItem(key)
  } catch (error) {
    console.log(error)
  }
}

export async function clearAllData() {
  try {
    return await AsyncStorage.clear()
  } catch (error) {
    console.log(error)
  }
}
