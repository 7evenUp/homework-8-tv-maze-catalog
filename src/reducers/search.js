import { searchRequest, searchSuccess, searchFailure } from '../actions'
import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

const isFetching = handleActions(
    {
        [searchRequest] : () => true,
        [searchSuccess] : () => false
    },
    false
)

const result = handleActions(
    {
        [searchRequest]: () => [],
        [searchSuccess]: (_state, action) => action.payload
    },
    []
)

const error = handleActions(
    {
        [searchRequest]: () => null,
        [searchFailure]: (_state, action) => action.payload
    },
    null
)

export default combineReducers({
    isFetching,
    result,
    error
})
