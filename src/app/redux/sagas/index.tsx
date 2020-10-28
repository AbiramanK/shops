import {
    call,
    put,
    takeEvery,
    takeLatest,
    all
} from 'redux-saga/effects';
import {
    makeLogin,
    handleLoginResponse
} from './Auth/Login';

export default function* rootSaga() {
    yield all([
        makeLogin(),
        handleLoginResponse()
    ])
}