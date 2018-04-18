import * as types from '../types/show'
import initialState from './initialState'

export default function showReducer(state = initialState.show, action) {
    switch (action.type) {
        case types.LOAD_SHOW_SUCCESS:
            return action.show
        default:
            return state
    }
}
