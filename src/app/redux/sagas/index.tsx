import {
    call,
    put,
    takeEvery,
    takeLatest,
    all
} from 'redux-saga/effects';
import {
    makeLogin,
    handleLoginResponse,

    makeRegister,
    handleRegisterResponse,

    makeLogout,
    handleLogoutResponse
} from './Auth';
import {
    getProducts,
    addProducts,
    removeProduct
} from './Product';
import {
    getCarts,
    addCarts,
    removeCart,
    updateCart
} from './Cart';
import {
    getCheckouts,
    addCheckouts,
    removeCheckout,
    updateCheckout
} from './Checkout';

export default function* rootSaga() {
    yield all([
        makeLogin(),
        handleLoginResponse(),

        makeRegister(),
        handleRegisterResponse(),

        makeLogout(),
        handleLogoutResponse(),

        getProducts(),
        addProducts(),
        removeProduct(),

        getCarts(),
        addCarts(),
        removeCart(),
        updateCart(),

        getCheckouts(),
        addCheckouts(),
        removeCheckout(),
        updateCheckout(),
    ])
}