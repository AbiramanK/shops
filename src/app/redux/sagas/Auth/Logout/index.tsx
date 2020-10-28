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
  LOGOUT_REQUEST,
  LOGOUT_REQUEST_SUCCESS,
  LOGOUT_REQUEST_ERROR,
} from '../../../Contants';
import {
  logout
} from '../../../../actions/Auth';
import {
  logoutRequest,
  logoutRequestSuccess,
  logoutRequestError
} from '../../../actions/Auth';
import {
  loaderActive,
  loaderStop
} from '../../../actions/Loader';

import {
  StoreAccessToken,
  RemoveAccessToken,
  RemoveAllLocalStorage
} from '../../../../actions/Auth';

export function* makeLogout() {
  yield takeLatest(LOGOUT_REQUEST, callLogoutApi);
}

function* callLogoutApi(action: any) {
  try {
    yield put(loaderActive());
    const data = yield call(logout);
    yield put(logoutRequestSuccess(data));
    yield put(push('/home'));
  } catch (e) {
    yield all([
      logoutRequestError(e)
    ]);
  } finally {
    yield put(loaderStop());
  }
}

export function* handleLogoutResponse() {
  yield takeLatest(LOGOUT_REQUEST_SUCCESS, removeUserAuthToken)
}

function* removeUserAuthToken(action: any) {
  let res = action.payload;
  if (res.success === true) {
    RemoveAccessToken();
    RemoveAllLocalStorage();

    yield(push("/")); 
  }
}