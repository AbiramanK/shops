import React from 'react';
import { createStore, applyMiddleware, combineReducers, compose,  } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { 
    connectRouter,
    routerMiddleware 
} from 'connected-react-router'
import { createBrowserHistory } from 'history'

import rootSaga from '../sagas/'
import rootReducer from './../rootReducer';

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    rootReducer(history),
    composeEnhancer(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware
        )
    )
)

sagaMiddleware.run(rootSaga)

export default store;