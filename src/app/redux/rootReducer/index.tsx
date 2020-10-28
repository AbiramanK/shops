import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history'
import { 
    connectRouter,
    routerMiddleware 
} from 'connected-react-router'

import {
    AuthReducer,
    LoaderReducer,
    ProductReducer,
    CartReducer
} from './../reducers';

export const history = createBrowserHistory()


const rootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    auth: AuthReducer,
    loader: LoaderReducer,
    product: ProductReducer,
    cart: CartReducer
});

export default rootReducer;