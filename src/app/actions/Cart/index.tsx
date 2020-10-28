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
import { EnumType } from 'typescript';


export const carts = async () => {

    const accessToken = await GetAccessToken();

    return new Promise((resolve, reject) => {
        fetch(`${BASE_API}cart`, {
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

export const addCart = async (params: { productId: any, productCount: any, totalPrice: any }) => {

    const accessToken = await GetAccessToken();

    return new Promise((resolve, reject) => {
        fetch(`${BASE_API}cart`, {
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

export const removeCartById = async (id: any) => {

    const accessToken = await GetAccessToken();

    return new Promise((resolve, reject) => {
        fetch(`${BASE_API}cart/${id}`, {
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

export const updateCartById = async (params: { type: updateCartByIdTypes, cartId: any }) => {

    const accessToken = await GetAccessToken();

    return new Promise((resolve, reject) => {
        fetch(`${BASE_API}cart`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify({
                type: params.type,
                cart_id: params.cartId
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

enum updateCartByIdTypes { "INCREMENT", "DECREMENT" };