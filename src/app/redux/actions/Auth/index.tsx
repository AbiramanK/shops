import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_ERROR
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
