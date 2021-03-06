import * as actionTypes from './actionTypes';

export const saveResult = (res) => {   
    return {
        type : actionTypes.STORE_RESULT,
        result : res
    }
}

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
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