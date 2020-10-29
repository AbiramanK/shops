import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,

    LOGOUT_REQUEST,
    LOGOUT_REQUEST_SUCCESS,

    REGISTER_REQUEST,
    REGISTER_REQUEST_SUCCESS
} from "./../../Contants";


const INITIAL_STATE = {
    userDetails: {},
    isLoggedIn: false
};

const AuthReducer = (state = INITIAL_STATE, action: any) => {

    console.log("reducer action AuthReducer", action)

    switch (action.type) {

        case LOGIN_REQUEST:

            return {
                ...state,
            };
        case LOGIN_REQUEST_SUCCESS:

            return {
                ...state,
                userDetails: action.payload,
                isLoggedIn: true
            };
        case LOGOUT_REQUEST:

            return {
                ...state,
            };
        case LOGOUT_REQUEST_SUCCESS:

            return {
                ...state,
                userDetails: {},
                isLoggedIn: false
            };

        case REGISTER_REQUEST:

            return {
                ...state,
            };

        case REGISTER_REQUEST_SUCCESS:

            return {
                ...state,
                userDetails: action.payload
            };

        default: return state;

    }

};

export default AuthReducer;