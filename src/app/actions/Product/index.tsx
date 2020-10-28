import {
    BASE_API
} from './../../Configs';
import {
    handleResponse,
    handleCatch,
} from '../../utilities/AuthActionUtilities';
import {
    GetAccessToken
} from './../Auth';


export const products = async () => {
    
    const accessToken = await GetAccessToken();

    return new Promise((resolve, reject) => {
        fetch(`${BASE_API}product`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
            method: 'GET'
        })
            .then((res) => {
                return handleResponse(res, resolve, reject);
            })
            .catch((e) => {
                return handleCatch(e, resolve, reject);
            })
    })
}

export const addProduct = async (product: any) => {
    
    const accessToken = await GetAccessToken();

    return new Promise((resolve, reject) => {
        fetch(`${BASE_API}product`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'multipart/form-data',
                'Content-Type': 'multipart/form-data'
            },
            method: 'POST',
            body: product
        })
            .then((res) => {
                return handleResponse(res, resolve, reject);
            })
            .catch((e) => {
                return handleCatch(e, resolve, reject);
            })
    })
}

export const removeProductById = async (id: any) => {

    const accessToken = await GetAccessToken();

    return new Promise((resolve, reject) => {
        fetch(`${BASE_API}product/${id}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            method: 'DELETE'
        })
            .then((res) => {
                return handleResponse(res, resolve, reject);
            })
            .catch((e) => {
                return handleCatch(e, resolve, reject);
            })
    })
}