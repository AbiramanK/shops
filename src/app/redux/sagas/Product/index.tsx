import {
    call,
    put,
    takeEvery,
    takeLatest,
    all
} from 'redux-saga/effects';
import {
    push
} from 'connected-react-router';

import {
    PRODUCT_GET_REQUEST,
    PRODUCT_GET_REQUEST_SUCCESS,
    PRODUCT_GET_REQUEST_ERROR,

    PRODUCT_ADD_REQUEST,
    PRODUCT_ADD_REQUEST_SUCCESS,
    PRODUCT_ADD_REQUEST_ERROR,

    PRODUCT_REMOVE_REQUEST,
    PRODUCT_REMOVE_REQUEST_SUCCESS,
    PRODUCT_REMOVE_REQUEST_ERROR,
} from './../../Contants';
import {
    products,
    addProduct,
    removeProductById
} from './../../../actions/Product';
import {
    productGetRequest,
    productGetRequestSuccess,
    productGetRequestError,

    productAddRequest,
    productAddRequestSuccess,
    productAddRequestError,

    productRemoveRequest,
    productRemoveRequestSuccess,
    productRemoveRequestError,
} from './../../actions/Product';
import {
    loaderActive,
    loaderStop
} from './../../actions/Loader';

export function* getProducts() {
    yield takeLatest(productGetRequest, callProductApi);
}

function* callProductApi(action: any) {
    try {
        yield put(loaderActive());
        const data = yield call(products);
        yield put(productGetRequestSuccess(data));
    } catch (e) {
        yield all([
            productGetRequestError(e)
        ]);
    } finally {
        yield put(loaderStop());
    }
}

export function* addProducts() {
    yield takeLatest(productAddRequest, callAddProductApi);
}

function* callAddProductApi(action: any) {
    try {
        yield put(loaderActive());
        const data = yield call(addProduct, action.payload);
        yield put(productAddRequestSuccess(data));
    } catch (e) {
        yield all([
            productAddRequestError(e)
        ]);
    } finally {
        yield put(loaderStop());
    }
}

export function* removeProduct() {
    yield takeLatest(productRemoveRequest, callRemoveProductApi);
}

function* callRemoveProductApi(action: any) {
    try {
        yield put(loaderActive());
        const data = yield call(products);
        yield put(productRemoveRequestSuccess(data));
    } catch (e) {
        yield all([
            productRemoveRequestError(e)
        ]);
    } finally {
        yield put(loaderStop());
    }
}