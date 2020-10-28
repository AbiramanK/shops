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
    CartReducer,
    CheckoutReducer
} from './../reducers';

export const history = createBrowserHistory()


const rootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    auth: AuthReducer,
    loader: LoaderReducer,
    product: ProductReducer,
    cart: CartReducer,
    checkout: CheckoutReducer
});

export default rootReducer;