import {
    CART_GET_REQUEST,
    CART_GET_REQUEST_SUCCESS,
    CART_GET_REQUEST_ERROR,

    CART_ADD_REQUEST,
    CART_ADD_REQUEST_SUCCESS,
    CART_ADD_REQUEST_ERROR,

    CART_REMOVE_REQUEST,
    CART_REMOVE_REQUEST_SUCCESS,
    CART_REMOVE_REQUEST_ERROR,

    CART_UPDATE_REQUEST,
    CART_UPDATE_REQUEST_SUCCESS,
    CART_UPDATE_REQUEST_ERROR
} from "./../../Contants";


const INITIAL_STATE = {
    carts: []
};

const CartReducer = (state = INITIAL_STATE, action: any) => {

    switch (action.type) {

        case CART_GET_REQUEST:

            return {
                ...state
            };
        case CART_GET_REQUEST_SUCCESS:

            return {
                ...state,
                carts: action.payload.data
            };

        case CART_GET_REQUEST_ERROR:

            return {
                ...state
            };

        case CART_ADD_REQUEST:

            return {
                ...state
            };
        case CART_ADD_REQUEST_SUCCESS:

            return {
                ...state
            };

        case CART_ADD_REQUEST_ERROR:

            return {
                ...state
            };

        case CART_REMOVE_REQUEST:

            return {
                ...state
            };
        case CART_REMOVE_REQUEST_SUCCESS:

            return {
                ...state
            };

        case CART_REMOVE_REQUEST_ERROR:

            return {
                ...state,
            };

        case CART_UPDATE_REQUEST:

            return {
                ...state
            };
        case CART_UPDATE_REQUEST_SUCCESS:

            return {
                ...state
            };

        case CART_UPDATE_REQUEST_ERROR:

            return {
                ...state,
            };

        default: return state;

    }

};

export default CartReducer;