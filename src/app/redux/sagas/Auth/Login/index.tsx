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

  LOADER_ACTIVATE,
  LOADER_STOP
} from '../../../Contants';
import {
  login
} from '../../../../actions/Auth';
import {
  loginRequest,
  loginRequestSuccess,
  loginRequestError
} from '../../../actions/Auth';
import {
  loaderActive,
  loaderStop
} from '../../../actions/Loader';
import {
  showSuccessMessage,
  showErrorMessage,
  showWarnMessage
} from '../../../../utilities/NotificationUtilities';
import {
  StoreAccessToken
} from '../../../../actions/Auth';

export function* makeLogin() {
  yield takeLatest(LOGIN_REQUEST, callLoginApi);
}

function* callLoginApi(action: any) {
  try {
    yield put(loaderActive());
    const data = yield call(login, action.payload);
    yield put(loginRequestSuccess(data));
    yield put(push('/home'));
  } catch (e) {
    yield all([
      loginRequestError(e)
    ]);
  } finally {
    yield put(loaderStop());
  }
}

export function* handleLoginResponse() {
  yield takeLatest(LOGIN_REQUEST_SUCCESS, storeUserAuthToken)
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