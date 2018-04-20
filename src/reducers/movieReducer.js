import * as types from '../types/movie'
import initialState from './initialState'

export default function moviesReducer(state = initialState.movie, action){
    switch(action.type){
        case types.LOAD_MOVIE_SUCCESS:
            return action.movie
        case types.LOAD_RECOMMENDATIONS_SUCCESS:
            return {
                ...state,
                recommendations: action.recommendations
            }
        default:
            return state
  }
}
