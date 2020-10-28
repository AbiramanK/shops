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
    handleRegisterResponse
} from './Auth';
import {
    getProducts,
    addProducts,
    removeProduct
} from './Product';

export default function* rootSaga() {
    yield all([
        makeLogin(),
        handleLoginResponse(),

        makeRegister(),
        handleRegisterResponse(),

        getProducts(),
        addProducts(),
        removeProduct()
    ])
}