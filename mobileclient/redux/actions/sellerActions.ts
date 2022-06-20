import * as api from '../../api/index'
import * as actionTypes from '../actionTypes'
import { Dispatch } from 'redux';

export const fetchPopularSeller = () => async (dispatch) => {
    const {data} = await api.fetchPopularSeller();
    try {
        dispatch({type:actionTypes.FETCH_POPULAR_SELLER,payload:data});
    } catch (error) {
        console.log(error);
    }   
}

export const fetchSeller = () => async (dispatch:Dispatch) => {
    const {data} = await api.fetchSeller();
    try {
        dispatch({type:actionTypes.FETCH_SELLER,payload:data})
    } catch (error) {
        console.log(error)
    }
}