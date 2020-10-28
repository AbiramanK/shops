import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_ERROR,

    REGISTER_REQUEST,
    REGISTER_REQUEST_SUCCESS,
    REGISTER_REQUEST_ERROR
} from './../../Contants'

export const loginRequest = (data: any) => {
    return {
        type: LOGIN_REQUEST,
        payload: data
    };
}

export const loginRequestSuccess = (data: any) => {
    return {
        type: LOGIN_REQUEST_SUCCESS,
        payload: data
    }
}

export const loginRequestError = (data: any) => {
    return {
        type: LOGIN_REQUEST_ERROR,
        payload: data
    }
}

export const registerRequest = (data: any) => {
    return {
        type: REGISTER_REQUEST,
        payload: data
    };
}

export const registerRequestSuccess = (data: any) => {
    return {
        type: REGISTER_REQUEST_SUCCESS,
        payload: data
    }
}

export const registerRequestError = (data: any) => {
    return {
        type: REGISTER_REQUEST_ERROR,
        payload: data
    }
}
