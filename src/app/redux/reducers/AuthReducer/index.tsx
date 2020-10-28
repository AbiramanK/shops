import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS
} from "./../../Contants";


const INITIAL_STATE = {
    userDetails: {}
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
                userDetails: action.payload
            };

        default: return state;

    }

};

export default AuthReducer;