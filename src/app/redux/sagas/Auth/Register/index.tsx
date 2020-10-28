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
import { createBrowserHistory } from 'history'

import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR,

  REGISTER_REQUEST,
  REGISTER_REQUEST_SUCCESS,
  REGISTER_REQUEST_ERROR,

  LOADER_ACTIVATE,
  LOADER_STOP
} from '../../../Contants';
import {
  login,
  register
} from '../../../../actions/Auth';
import {
  registerRequestSuccess,
  registerRequestError
} from '../../../actions/Auth';
import {
  loaderActive,
  loaderStop
} from '../../../actions/Loader';
import {
  StoreAccessToken
} from '../../../../actions/Auth';

export function* makeRegister() {
  yield takeLatest(REGISTER_REQUEST, callRegisterApi);
}

function* callRegisterApi(action: any) {
  try {
    yield put(loaderActive());
    const data = yield call(register, action.payload);
    yield put(registerRequestSuccess(data));
    yield put(push('/home'));
  } catch (e) {
    yield all([
      registerRequestError(e)
    ]);
  } finally {
    yield put(loaderStop());
  }
}

export function* handleRegisterResponse() {
  yield takeLatest(REGISTER_REQUEST_SUCCESS, storeUserAuthToken)
}

function* storeUserAuthToken(action: any) {
  let res = action.payload;
  if (res.success === true) {
    StoreAccessToken(res.data.access_token);

    yield(push("/home", {
      name: res.data.user.name
    })); 
  }
}