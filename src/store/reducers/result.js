import * as actionTypes from '../actions/actionTypes';
import {updatedObject} from '../utility';

const initialState = {
    results: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
            return updatedObject(state, {results: state.results.concat({id: new Date(), value: action.result})})
        

        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultId);
            return updatedObject(state, {results: updatedArray})
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
          
    }
    return state;
};

export default reducer;