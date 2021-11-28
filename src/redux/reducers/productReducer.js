import { ActionTypes } from "../constants/action-types";


const initialState = {
    products: [],
}

export const productsReducer = (state =  initialState, {type,payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            // copy the state then add new payload 
            return {...state, products: payload};
        default: 
            return state;
    }
}

export const selectedProductReducer = (state = {}, {type,payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
                return {...state, ...payload};

        case ActionTypes.REMOVE_SELECTED_PRODUCT: // clear state
                return {};
        default:
            return state;
    }
}