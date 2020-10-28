import {
    LOADER_ACTIVATE,
    LOADER_STOP
} from "./../../Contants";


const INITIAL_STATE = {
    isLoading: false
};

const LoaderReducer = (state = INITIAL_STATE, action: any) => {

    console.log("reducer action LoaderReducer", action)

    switch (action.type) {

        case LOADER_ACTIVATE:

            return {
                // ...state,
                isLoading: true
            };

        case LOADER_STOP:

            return {
                // ...state,
                isLoading: false
            };

        default: return state;

    }

};

export default LoaderReducer;