import ProductActionsType from '../constants/product-actions-types';

export const allProducts = (products)=> {
    return{
        type: ProductActionsType.ALL_PRODUCTS,
        payload: products
    }
};

export const selectedProducts = (product)=> {
    return{
        type: ProductActionsType.SELECTED_PRODUCT,
        payload: product
    }
};

export const removeProducts = ()=> {
    return{
        type: ProductActionsType.REMOVE_PRODUCT
    }
};

