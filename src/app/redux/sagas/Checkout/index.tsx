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
    CHECKOUT_GET_REQUEST,
    CHECKOUT_GET_REQUEST_SUCCESS,
    CHECKOUT_GET_REQUEST_ERROR,

    CHECKOUT_ADD_REQUEST,
    CHECKOUT_ADD_REQUEST_SUCCESS,
    CHECKOUT_ADD_REQUEST_ERROR,

    CHECKOUT_REMOVE_REQUEST,
    CHECKOUT_REMOVE_REQUEST_SUCCESS,
    CHECKOUT_REMOVE_REQUEST_ERROR,

    CHECKOUT_UPDATE_REQUEST,
    CHECKOUT_UPDATE_REQUEST_SUCCESS,
    CHECKOUT_UPDATE_REQUEST_ERROR,
} from './../../Contants';
import {
    checkouts,
    addCheckout,
    removeCheckoutById,
    updateCheckoutById
} from './../../../actions/Checkout';
import {
    checkoutGetRequest,
    checkoutGetRequestSuccess,
    checkoutGetRequestError,

    checkoutAddRequest,
    checkoutAddRequestSuccess,
    checkoutAddRequestError,

    checkoutRemoveRequest,
    checkoutRemoveRequestSuccess,
    checkoutRemoveRequestError,
    
    checkoutUpdateRequest,
    checkoutUpdateRequestSuccess,
    checkoutUpdateRequestError,
} from './../../actions/Checkout';
import {
    loaderActive,
    loaderStop
} from './../../actions/Loader';

export function* getCheckouts() {
    yield takeLatest(CHECKOUT_GET_REQUEST, callCheckoutApi);
}

function* callCheckoutApi(action: any) {
    try {
        yield put(loaderActive());
        const data = yield call(checkouts);
        yield put(checkoutGetRequestSuccess(data));
    } catch (e) {
        yield all([
            checkoutGetRequestError(e)
        ]);
    } finally {
        yield put(loaderStop());
    }
}

export function* addCheckouts() {
    yield takeLatest(CHECKOUT_ADD_REQUEST, callAddCheckoutApi);
}

function* callAddCheckoutApi(action: any) {
    try {
        yield put(loaderActive());
        const data = yield call(addCheckout, action.payload);
        yield put(checkoutAddRequestSuccess(data));
    } catch (e) {
        yield all([
            checkoutAddRequestError(e)
        ]);
    } finally {
        yield put(loaderStop());
    }
}

export function* removeCheckout() {
    yield takeLatest(CHECKOUT_REMOVE_REQUEST, callRemoveCheckoutApi);
}

function* callRemoveCheckoutApi(action: any) {
    try {
        yield put(loaderActive());
        const data = yield call(removeCheckoutById, action.payload);
        yield put(checkoutRemoveRequestSuccess(data));
        yield put(checkoutGetRequest(action));
    } catch (e) {
        yield all([
            checkoutRemoveRequestError(e)
        ]);
    } finally {
        yield put(loaderStop());
    }
}

export function* updateCheckout() {
    yield takeLatest(CHECKOUT_UPDATE_REQUEST, callUpdateCheckoutApi);
}

function* callUpdateCheckoutApi(action: any) {
    try {
        yield put(loaderActive());
        const data = yield call(updateCheckoutById, action.payload);
        yield put(checkoutUpdateRequestSuccess(data));
        yield put(checkoutGetRequest(action));
    } catch (e) {
        yield all([
            checkoutRemoveRequestError(e)
        ]);
    } finally {
        yield put(loaderStop());
    }
}