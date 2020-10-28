import {
    PRODUCT_GET_REQUEST,
    PRODUCT_GET_REQUEST_SUCCESS,
    PRODUCT_GET_REQUEST_ERROR,

    PRODUCT_ADD_REQUEST,
    PRODUCT_ADD_REQUEST_SUCCESS,
    PRODUCT_ADD_REQUEST_ERROR,

    PRODUCT_REMOVE_REQUEST,
    PRODUCT_REMOVE_REQUEST_SUCCESS,
    PRODUCT_REMOVE_REQUEST_ERROR
} from "./../../Contants";


const INITIAL_STATE = {
    products: {}
};

const ProductReducer = (state = INITIAL_STATE, action: any) => {

    console.log("reducer action ProductReducer", action)

    switch (action.type) {

        case PRODUCT_GET_REQUEST:

            return {
                ...state,
                products: action.payload.data
            };
        case PRODUCT_GET_REQUEST_SUCCESS:

            return {
                ...state
            };

        case PRODUCT_GET_REQUEST_ERROR:

            return {
                ...state
            };

        case PRODUCT_ADD_REQUEST:

            return {
                ...state
            };
        case PRODUCT_ADD_REQUEST_SUCCESS:

            return {
                ...state
            };

        case PRODUCT_ADD_REQUEST_ERROR:

            return {
                ...state
            };

        case PRODUCT_REMOVE_REQUEST:

            return {
                ...state
            };
        case PRODUCT_REMOVE_REQUEST_SUCCESS:

            return {
                ...state
            };

        case PRODUCT_REMOVE_REQUEST_ERROR:

            return {
                ...state,
            };

        default: return state;

    }

};

export default ProductReducer;