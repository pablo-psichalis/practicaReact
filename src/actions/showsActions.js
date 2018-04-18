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
            .then(response => response.json())
            .then(json => json.results)
            .then(shows => dispatch(loadShowsSuccess()))
            .catch(error => {
                dispatch(loadShowsFailure())
                alert('We could not load the page at this time')
            })
    }
}