import * as actionTypes from '../actionTypes';

const sellerReducer = (seller ={popseller:[],normseller:[]}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POPULAR_SELLER:
      return {...seller,popseller:action.payload}

    case actionTypes.FETCH_SELLER:
      return {...seller,normseller:action.payload}

    default:
      return seller;
  }
};

export default sellerReducer;
