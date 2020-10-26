import {
    LOGIN_RET
} from "./../../Contants";


const INITIAL_STATE = {
    userDetails: {}
};

const AuthReducer = (state = INITIAL_STATE, action: any) => {

    switch (action.type) {

        case LOGIN_RET:

            return {
                ...state,
            };

        default: return state;

    }

};

export default AuthReducer;