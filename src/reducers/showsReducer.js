import * as types from '../types/shows'
import initialState from './initialState'

export default function showsReducer(state = initialState.shows, action) {
    switch (action.type) {
        case types.LOAD_SHOWS_SUCCESS:
            if (action.page === 1) {
                return action.shows
            }
            else {
                return [
                    ...state,
                    ...action.shows,
                ]
            }
        default:
            return state
    }
}
