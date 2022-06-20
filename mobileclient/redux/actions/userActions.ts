import AsyncStorage from '@react-native-async-storage/async-storage';
import * as api from '../../api/index';
import * as actionTypes from '../../redux/actionTypes'

export const login = (userData) => async (dispatch) => {
    try {
        const {data} = await api.SignIn(userData);
        dispatch({type:actionTypes.SIGN_IN,payload:data.accesToken})
    } catch (error) {
        console.log(error)
    }
}

export const register = (userData) => async (dispatch) => {
    try {
        const data = await api.SignUp(userData);
        dispatch({type:actionTypes.SIGN_UP,payload:data})
    } catch (error) {
        console.log(error)
    }
}


export const logout = () => async (dispatch) => {
    try {
        await AsyncStorage.removeItem('token');
        dispatch({type:actionTypes.LOG_OUT,payload:null})
    } catch (error) {
        console.log(error)
    }
}


export const getUserInfo = (id) => async (dispatch) => {
    try {
        const data = await api.getUserInfo(id)
        dispatch({type:actionTypes.USER_INFO,payload:data})
    } catch (error) {
        console.log(error)   
    }
}