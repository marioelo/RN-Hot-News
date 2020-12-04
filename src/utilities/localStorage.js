import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = data => new Promise(async (resolve, reject) => {
    try {
        const jsonData = JSON.stringify(data)
        await AsyncStorage.setItem('@favorites', jsonData);
        resolve();
    } catch (error) {
        reject(error);
    }
});


export const getData = () => new Promise(async (resolve, reject) => {
    try {
        const jsonValue = await AsyncStorage.getItem('@favorites');
        const data = jsonValue !== null ? JSON.parse(jsonValue) : [];
        resolve(data);
    } catch (error) {
        reject(error);
    }
});