import * as actionTypes from './actionTypes';
export const saveResult = (res) => {
    return {
        type : actionTypes.STORE_RESULT,
        result : res
    }
}

export const storeResult = (result) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(result));
        }, 200)
    }
    
}

export const deleteResult = (resultId) => {
    return {
        type : actionTypes.DELETE_RESULT,
        resultId : resultId
    }
}