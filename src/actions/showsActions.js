import * as types from '../types/shows'
import { showsURL } from '../utils'

import _ from 'lodash';

export function loadShowsSuccess(shows, page) {
    return { type: types.LOAD_SHOWS_SUCCESS, shows, page }
}

export function loadShowsFailure() {
    return { type: types.LOAD_SHOWS_FAILURE }
}

export function hideShowSuccess(shows, show_id) {
    return { type: types.HIDE_SHOW_SUCESS, shows, show_id }
}

export function loadShows(page = 1, endpoint = 'popular') {
    return dispatch => {
        fetch(showsURL[endpoint](page))
            .then(response => response.json())
            .then(json => json.results)
            .then(shows => dispatch(loadShowsSuccess(shows, page)))
            .catch(error => {
                dispatch(loadShowsFailure())
                alert('We could not load the page at this time')
            })
    }
}

export function hideShowAction(shows, show_id) {
    let encontrado = false;
    for (let i = 0; i < shows.length && !encontrado; i++) {
        if (shows[i].id == show_id) {
            shows.splice(i, 1);
            encontrado = true;
        }
    }
    return hideShowSuccess(shows);
}
