import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history'
import { 
    connectRouter,
    routerMiddleware 
} from 'connected-react-router'

import AuthReducer from './../reducers/AuthReducer';
import LoaderReducer from './../reducers/LoaderReducer';

export const history = createBrowserHistory()


const rootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    auth: AuthReducer,
    loader: LoaderReducer
});

export default rootReducer;