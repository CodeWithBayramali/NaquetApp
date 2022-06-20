import { applyMiddleware,createStore,combineReducers } from "redux";
import thunk from "redux-thunk";

/** REDUCER IMPORT */
import categoryReducer from "./reducers/categoryReducers";
import sellerReducer from "./reducers/sellerReducers";
import productReducer from "./reducers/productReducers";
import userReducer from "./reducers/userReducers";


const rootReducer = combineReducers({
    category:categoryReducer,
    seller:sellerReducer,
    product:productReducer,
    user:userReducer
})


const store = createStore(rootReducer,applyMiddleware(thunk))


export default store;
