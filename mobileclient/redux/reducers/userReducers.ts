import * as actionTypes from '../actionTypes'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {NativeModules} from 'react-native'
import { navigationRef } from '../../utils/navigationService'


const userReducer = (user={token:{},register:{},userInfo:{}},action) => {
    switch (action.type) {
        case actionTypes.SIGN_UP:
            return null
            
        case actionTypes.SIGN_IN:
            InitToken(action.payload)
            return {...user,token:action.payload}

        case actionTypes.LOG_OUT:
            removeToken()
            return {...user,token:action.payload}

        case actionTypes.USER_INFO:
            return {...user,userInfo:action.payload}
    
        default:
            return user;
    }
}

const InitToken = async (token) => {
    await AsyncStorage.setItem('token',token);
    const accToken = await AsyncStorage.getItem('token')
    if(accToken){
        navigationRef.navigate('Root')
    }
}

const removeToken = async () => {
    await AsyncStorage.removeItem('token')
    NativeModules.DevSettings.reload()
}

export default userReducer;