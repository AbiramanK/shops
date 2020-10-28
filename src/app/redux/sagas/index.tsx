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

export default function* rootSaga() {
    yield all([
        makeLogin(),
        handleLoginResponse(),

        makeRegister(),
        handleRegisterResponse(),
    ])
}