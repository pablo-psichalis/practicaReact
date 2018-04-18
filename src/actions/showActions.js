import * as types from '../types/show'
import { showsURL } from '../utils'

export function loadShowSuccess(show){
    return { type: types.LOAD_SHOW_SUCCESS, show }
}

export function loadShowFailure(){
    return { type: types.LOAD_SHOW_FAILURE }
}

export function loadShow(id){
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        .then(response => response.json())
        .then(movie => dispatch(loadShowSuccess(movie)))
        .catch(error => {
            dispatch(loadShowFailure())
            alert('We could not load the page at this time.')
        })
    }
}
