import {
    CHECKOUT_GET_REQUEST,
    CHECKOUT_GET_REQUEST_SUCCESS,
    CHECKOUT_GET_REQUEST_ERROR,

    CHECKOUT_ADD_REQUEST,
    CHECKOUT_ADD_REQUEST_SUCCESS,
    CHECKOUT_ADD_REQUEST_ERROR,

    CHECKOUT_REMOVE_REQUEST,
    CHECKOUT_REMOVE_REQUEST_SUCCESS,
    CHECKOUT_REMOVE_REQUEST_ERROR,

    CHECKOUT_UPDATE_REQUEST,
    CHECKOUT_UPDATE_REQUEST_SUCCESS,
    CHECKOUT_UPDATE_REQUEST_ERROR
} from "./../../Contants";


const INITIAL_STATE = {
    carts: []
};

const CheckReducer = (state = INITIAL_STATE, action: any) => {

    switch (action.type) {

        case CHECKOUT_GET_REQUEST:

            return {
                ...state
            };
        case CHECKOUT_GET_REQUEST_SUCCESS:

            return {
                ...state,
                carts: action.payload.data
            };

        case CHECKOUT_GET_REQUEST_ERROR:

            return {
                ...state
            };

        case CHECKOUT_ADD_REQUEST:

            return {
                ...state
            };
        case CHECKOUT_ADD_REQUEST_SUCCESS:

            return {
                ...state
            };

        case CHECKOUT_ADD_REQUEST_ERROR:

            return {
                ...state
            };

        case CHECKOUT_REMOVE_REQUEST:

            return {
                ...state
            };
        case CHECKOUT_REMOVE_REQUEST_SUCCESS:

            return {
                ...state
            };

        case CHECKOUT_REMOVE_REQUEST_ERROR:

            return {
                ...state,
            };

        case CHECKOUT_UPDATE_REQUEST:

            return {
                ...state
            };
        case CHECKOUT_UPDATE_REQUEST_SUCCESS:

            return {
                ...state
            };

        case CHECKOUT_UPDATE_REQUEST_ERROR:

            return {
                ...state,
            };

        default: return state;

    }

};

export default CheckReducer;