import ProductActionsType from "../constants/product-actions-types";

const initialState = {
    productList: []
}


export const productReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ProductActionsType.ALL_PRODUCTS:
            return {...state, productList: action.payload};

        default:
            return state
    }
};

export const selectedProductReducer = (state = {}, {type,payload})=>{
    switch (type) {
        case ProductActionsType.SELECTED_PRODUCT:
            return {...state, ...payload};

            case ProductActionsType.REMOVE_PRODUCT:
                return {};
        default:
            return state
    }
};