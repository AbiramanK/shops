import {
    ACCESS_TOKEN
} from './../../Constants';
import {
    BASE_API
} from './../../Configs';
import {
    handleResponse,
    handleCatch,
} from '../../utilities/AuthActionUtilities';


export const register = async (name: any, email: any, password: any) => {
    return new Promise((resolve, reject) => {
        fetch(`${BASE_API}auth/register`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                password
            }),
        })
            .then((res) => {
                return handleResponse(res, resolve, reject);
            })
            .catch((e) => {
                return handleCatch(e, resolve, reject);
            })
    })
}

export const login = async (params: { email: any, password: any }) => {
    return new Promise((resolve, reject) => {

        fetch(`${BASE_API}auth/login`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({
                email: params.email,
                password: params.password
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

export const logout = async () => {
    let token = GetAccessToken()
    return new Promise((resolve, reject) => {
        fetch(`${BASE_API}logout`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            method: 'GET',
        })
            .then((res) => {
                return handleResponse(res, resolve, reject);
            })
            .catch((e) => {
                return handleCatch(e, resolve, reject);
            })
    })
}


export const StoreAccessToken = async (token: any) => {
    await localStorage.setItem(ACCESS_TOKEN, token);
}

export const GetAccessToken = async () => {
    let token = await localStorage.getItem(ACCESS_TOKEN);
    return token;
}

export const RemoveAccessToken = async () => {
    await localStorage.removeItem(ACCESS_TOKEN);
}


export const RemoveAllLocalStorage = async () => {
    await localStorage.clear();
}