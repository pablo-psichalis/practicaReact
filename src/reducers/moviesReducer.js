import * as types from '../types/movies'
import initialState from './initialState'

export default function moviesReducer(state = initialState.movies, action){
    switch(action.type){
        case types.LOAD_MOVIES_SUCCESS:
            if(action.page === 1) {
                return action.movies
            }
            else {
                return [
                    ...state,
                    ...action.movies,
                ]
            }
        default:
        return state
  }
}
