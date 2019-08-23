import { showSuccess, showRequest, showFailure } from '../actions'

const initialState = {
    isFetching: false,
    show: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case showRequest.toString():
            return {
                ...state,
                isFetching: true,
                show: {}
            }

        case showSuccess.toString():
            return { 
                ...state,
                isFetching: false,
                show: payload
            }

        case showFailure.toString():
            return state

        default:
            return state
    }
}
