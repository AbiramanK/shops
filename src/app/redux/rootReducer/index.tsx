import { combineReducers } from 'redux';


import AuthReducer from './../reducers/AuthReducer';


const rootReducer = combineReducers({

    counter: AuthReducer,

});

export default rootReducer;