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
} from './../../Contants'

export const cartGetRequest = (data: any) => {
    return {
        type: CART_GET_REQUEST,
        payload: data
    };
}

export const cartGetRequestSuccess = (data: any) => {
    return {
        type: CART_GET_REQUEST_SUCCESS,
        payload: data
    }
}

export const cartGetRequestError = (data: any) => {
    return {
        type: CART_GET_REQUEST_ERROR,
        payload: data
    }
}

export const cartAddRequest = (data: any) => {
    return {
        type: CART_ADD_REQUEST,
        payload: data
    };
}

export const cartAddRequestSuccess = (data: any) => {
    return {
        type: CART_ADD_REQUEST_SUCCESS,
        payload: data
    }
}

export const cartAddRequestError = (data: any) => {
    return {
        type: CART_ADD_REQUEST_ERROR,
        payload: data
    }
}

export const cartRemoveRequest = (data: any) => {
    return {
        type: CART_REMOVE_REQUEST,
        payload: data
    };
}

export const cartRemoveRequestSuccess = (data: any) => {
    return {
        type: CART_REMOVE_REQUEST_SUCCESS,
        payload: data
    }
}

export const cartRemoveRequestError = (data: any) => {
    return {
        type: CART_REMOVE_REQUEST_ERROR,
        payload: data
    }
}

export const cartUpdateRequest = (data: any) => {
    return {
        type: CART_UPDATE_REQUEST,
        payload: data
    };
}

export const cartUpdateRequestSuccess = (data: any) => {
    return {
        type: CART_UPDATE_REQUEST_SUCCESS,
        payload: data
    }
}

export const cartUpdateRequestError = (data: any) => {
    return {
        type: CART_UPDATE_REQUEST_ERROR,
        payload: data
    }
}