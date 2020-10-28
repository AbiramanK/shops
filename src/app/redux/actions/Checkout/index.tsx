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
} from './../../Contants'

export const checkoutGetRequest = (data: any) => {
    return {
        type: CHECKOUT_GET_REQUEST,
        payload: data
    };
}

export const checkoutGetRequestSuccess = (data: any) => {
    return {
        type: CHECKOUT_GET_REQUEST_SUCCESS,
        payload: data
    }
}

export const checkoutGetRequestError = (data: any) => {
    return {
        type: CHECKOUT_GET_REQUEST_ERROR,
        payload: data
    }
}

export const checkoutAddRequest = (data: any) => {
    return {
        type: CHECKOUT_ADD_REQUEST,
        payload: data
    };
}

export const checkoutAddRequestSuccess = (data: any) => {
    return {
        type: CHECKOUT_ADD_REQUEST_SUCCESS,
        payload: data
    }
}

export const checkoutAddRequestError = (data: any) => {
    return {
        type: CHECKOUT_ADD_REQUEST_ERROR,
        payload: data
    }
}

export const checkoutRemoveRequest = (data: any) => {
    return {
        type: CHECKOUT_REMOVE_REQUEST,
        payload: data
    };
}

export const checkoutRemoveRequestSuccess = (data: any) => {
    return {
        type: CHECKOUT_REMOVE_REQUEST_SUCCESS,
        payload: data
    }
}

export const checkoutRemoveRequestError = (data: any) => {
    return {
        type: CHECKOUT_REMOVE_REQUEST_ERROR,
        payload: data
    }
}

export const checkoutUpdateRequest = (data: any) => {
    return {
        type: CHECKOUT_UPDATE_REQUEST,
        payload: data
    };
}

export const checkoutUpdateRequestSuccess = (data: any) => {
    return {
        type: CHECKOUT_UPDATE_REQUEST_SUCCESS,
        payload: data
    }
}

export const checkoutUpdateRequestError = (data: any) => {
    return {
        type: CHECKOUT_UPDATE_REQUEST_ERROR,
        payload: data
    }
}