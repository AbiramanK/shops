import {
    showSuccessMessage,
    showErrorMessage
} from './../NotificationUtilities';

export const handleResponse = async (response: any, resolve: any, reject: any) => {
    try {
        return response.json()
            .then((res: any) => {
                if (res.success === true) {
                    showSuccessMessage(res.message)
                    resolve(res);
                } else {
                    showErrorMessage(res.message)
                    reject(res);
                }
            })
            .catch((e: any) => {
                reject(e)
            })
    } catch (error) {
        showErrorMessage(error.message);
        reject(error);
    }
}

export const handleCatch = (e: any, resolve: any, reject: any) => {
    try {
        showErrorMessage(e.message);
        reject(e);
    } catch (error) {
        reject(error);
    }
}