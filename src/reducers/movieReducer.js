import * as types from '../types/movie'
import initialState from './initialState'

export default function moviesReducer(state = initialState.movie, action){
    switch(action.type){
        case types.LOAD_MOVIE_SUCCESS:
            return action.movie
        default:
            return state
  }
}
