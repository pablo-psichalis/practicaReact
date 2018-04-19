import * as types from '../types/shows'
import { showsURL } from '../utils'

export function loadShowsSuccess(shows, page) {
    return { type: types.LOAD_SHOWS_SUCCESS, shows, page }
}

export function loadShowsFailure() {
    return { type: types.LOAD_SHOWS_FAILURE }
}

export function loadShows(page = 1, endpoint = 'popular') {
    return dispatch => {
        fetch(showsURL[endpoint](page))
            .then(response => {
                console.log('URL:', showsURL[endpoint])
                return response.json()})
            .then(json => {let a = json.results; console.log(a); return a})
            .then(shows => dispatch(loadShowsSuccess(shows, page)))
            .catch(error => {
                dispatch(loadShowsFailure())
                alert('We could not load the page at this time')
            })
    }
}