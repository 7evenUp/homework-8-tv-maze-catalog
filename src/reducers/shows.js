import { showSuccess, showRequest } from '../actions'
import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

const isFetching = handleActions(
    {
        [showRequest]: () => true,
        [showSuccess]: () => false
    },
    false
)

const show = handleActions(
    {
        [showRequest]: () => {},
        [showSuccess]: (_state, action) => action.payload
    },
    {}
)

export default combineReducers(
    {isFetching,
    show}
)