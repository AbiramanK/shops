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
    CART_UPDATE_REQUEST_ERROR,
} from './../../Contants';
import {
    carts,
    addCart,
    removeCartById,
    updateCartById
} from './../../../actions/Cart';
import {
    cartGetRequest,
    cartGetRequestSuccess,
    cartGetRequestError,

    cartAddRequest,
    cartAddRequestSuccess,
    cartAddRequestError,

    cartRemoveRequest,
    cartRemoveRequestSuccess,
    cartRemoveRequestError,
    
    cartUpdateRequest,
    cartUpdateRequestSuccess,
    cartUpdateRequestError,
} from './../../actions/Cart';
import {
    loaderActive,
    loaderStop
} from './../../actions/Loader';

export function* getCarts() {
    yield takeLatest(CART_GET_REQUEST, callCartApi);
}

function* callCartApi(action: any) {
    try {
        yield put(loaderActive());
        const data = yield call(carts);
        yield put(cartGetRequestSuccess(data));
    } catch (e) {
        yield all([
            cartGetRequestError(e)
        ]);
    } finally {
        yield put(loaderStop());
    }
}

export function* addCarts() {
    yield takeLatest(CART_ADD_REQUEST, callAddCartApi);
}

function* callAddCartApi(action: any) {
    try {
        yield put(loaderActive());
        const data = yield call(addCart, action.payload);
        yield put(cartAddRequestSuccess(data));
    } catch (e) {
        yield all([
            cartAddRequestError(e)
        ]);
    } finally {
        yield put(loaderStop());
    }
}

export function* removeCart() {
    yield takeLatest(CART_REMOVE_REQUEST, callRemoveCartApi);
}

function* callRemoveCartApi(action: any) {
    try {
        yield put(loaderActive());
        const data = yield call(removeCartById, action.payload);
        yield put(cartRemoveRequestSuccess(data));
        yield put(cartGetRequest(action));
    } catch (e) {
        yield all([
            cartRemoveRequestError(e)
        ]);
    } finally {
        yield put(loaderStop());
    }
}

export function* updateCart() {
    yield takeLatest(CART_UPDATE_REQUEST, callUpdateCartApi);
}

function* callUpdateCartApi(action: any) {
    try {
        yield put(loaderActive());
        const data = yield call(updateCartById, action.payload);
        yield put(cartUpdateRequestSuccess(data));
        yield put(cartGetRequest(action));
    } catch (e) {
        yield all([
            cartRemoveRequestError(e)
        ]);
    } finally {
        yield put(loaderStop());
    }
}