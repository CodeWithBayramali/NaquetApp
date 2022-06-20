import * as api from '../../api/index'
import * as actionTypes from '../../redux/actionTypes'

export const fetchCategories = () => async (dispatch) => {
    const {data} = await api.fetchCategory();
    try {
        if(data)
            dispatch({type:actionTypes.FETCH_CATEGORY,payload:data})
    } catch (error) {
        if(!data)
           console.log(error);
    }
}

export const fetchCategoryById = (id) => async (dispatch) => {
    const {data} = await api.fetchCategoryById(id)
    try {
        dispatch({type:actionTypes.FETCH_BY_ID_CATEGORY,payload:data})
    } catch (error) {
        console.log(error);
    }
}