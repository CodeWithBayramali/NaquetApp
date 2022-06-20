import * as actionTypes from '../actionTypes'
import * as api from '../../api/index'

export const fetchProducts = () => async (dispatch) => {
    try {
        const data = await api.fetchProducts();
        dispatch({type:actionTypes.FETCH_PRODUCTS,payload:data})
    } catch (error) {
        
    }
}


export const createProduct = (productData) => async (dispatch) => {
    try {
        const data = await api.createProduct(productData)
        dispatch({type:actionTypes.CREATE_PRODUCT,payload:data})
    } catch (error) {
        console.log(error)
    }
}