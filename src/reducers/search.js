import { searchRequest, searchSuccess, searchFailure } from '../actions'

const initialState = {
    isFetching: false,
    result: [],
    error: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case searchRequest.toString():
            return {
                ...state,
                isFetching: true,
                result: []
            }

        case searchSuccess.toString():
            return {
                ...state,
                isFetching: false,
                result: payload
            }
        
        case searchFailure.toString():
            return {
                ...state,
                isFetching: false,
                error: payload
            }

        default:
            return state
    }
}
