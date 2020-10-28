import {
    LOADER_ACTIVATE,
    LOADER_STOP
} from './../../Contants';

export const loaderActive = () => {
    return {
        type: LOADER_ACTIVATE
    };
}

export const loaderStop = () => {
    return {
        type: LOADER_STOP
    }
}