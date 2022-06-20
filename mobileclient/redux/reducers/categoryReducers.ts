import * as actionTypes from '../../redux/actionTypes';

type Action = {
    type:string
    payload:[]
}

const categoryReducer = (category={categories:[],categoryById:[]},action:Action) => {
    switch (action.type) {
        case actionTypes.FETCH_CATEGORY:
            return {...category, categories:action.payload}
            
        case actionTypes.FETCH_BY_ID_CATEGORY:
            return {categoryById:action.payload}
        default:
            return category
    }
}

export default categoryReducer;