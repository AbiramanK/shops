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
} from './../../Contants'

export const productGetRequest = (data: any) => {
    return {
        type: PRODUCT_GET_REQUEST,
        payload: data
    };
}

export const productGetRequestSuccess = (data: any) => {
    return {
        type: PRODUCT_GET_REQUEST_SUCCESS,
        payload: data
    }
}

export const productGetRequestError = (data: any) => {
    return {
        type: PRODUCT_GET_REQUEST_ERROR,
        payload: data
    }
}

export const productAddRequest = (data: any) => {
    return {
        type: PRODUCT_ADD_REQUEST,
        payload: data
    };
}

export const productAddRequestSuccess = (data: any) => {
    return {
        type: PRODUCT_ADD_REQUEST_SUCCESS,
        payload: data
    }
}

export const productAddRequestError = (data: any) => {
    return {
        type: PRODUCT_ADD_REQUEST_ERROR,
        payload: data
    }
}

export const productRemoveRequest = (data: any) => {
    return {
        type: PRODUCT_REMOVE_REQUEST,
        payload: data
    };
}

export const productRemoveRequestSuccess = (data: any) => {
    return {
        type: PRODUCT_REMOVE_REQUEST_SUCCESS,
        payload: data
    }
}

export const productRemoveRequestError = (data: any) => {
    return {
        type: PRODUCT_REMOVE_REQUEST_ERROR,
        payload: data
    }
}