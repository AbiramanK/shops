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


export const checkouts = async () => {

    const accessToken = await GetAccessToken();

    return new Promise((resolve, reject) => {
        fetch(`${BASE_API}checkout`, {
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

export const addCheckout = async (params: { productId: any, productCount: any, totalPrice: any }) => {

    const accessToken = await GetAccessToken();

    return new Promise((resolve, reject) => {
        fetch(`${BASE_API}checkout`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                product_id: params.productId,
                product_count: params.productCount,
                total_price: params.totalPrice
            })
        })
            .then((res) => {
                return handleResponse(res, resolve, reject);
            })
            .catch((e) => {
                return handleCatch(e, resolve, reject);
            })
    })
}

export const removeCheckoutById = async (params: {id: any}) => {

    const accessToken = await GetAccessToken();

    return new Promise((resolve, reject) => {
        fetch(`${BASE_API}checkout/${params.id}`, {
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

export const updateCheckoutById = async (params: { type: updateCheckoutByIdTypes, id: any }) => {

    console.log("Checkout update params", params)

    const accessToken = await GetAccessToken();

    return new Promise((resolve, reject) => {
        fetch(`${BASE_API}checkout/${params.id}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify({
                type: params.type,
                Checkout_id: params.id
            })
        })
            .then((res) => {
                return handleResponse(res, resolve, reject);
            })
            .catch((e) => {
                return handleCatch(e, resolve, reject);
            })
    })
}

enum updateCheckoutByIdTypes { "INCREMENT", "DECREMENT" };