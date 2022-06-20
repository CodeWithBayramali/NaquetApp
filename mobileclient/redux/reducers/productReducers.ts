import * as actionTypes from '../actionTypes'


const productReducer = (product={products:[],productMessage:""},action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS:
            return {...product, products:action.payload}

        case actionTypes.CREATE_PRODUCT:
            return {...product, productMessage:action.payload}
    
        default:
            return product
    }
}

export default productReducer;