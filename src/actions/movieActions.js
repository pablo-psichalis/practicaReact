import * as types from '../types/movie'

export function loadMovieSuccess(movie) {
    return { type: types.LOAD_MOVIE_SUCCESS, movie }
}

export function loadMovieFailure() {
    return { type: types.LOAD_MOVIE_FAILURE }
}

export function loadRecommendationsSuccess(recommendations) {
    return { type: types.LOAD_RECOMMENDATIONS_SUCCESS, recommendations }
}

export function loadRecommendationFailure() {
    return { type: types.LOAD_RECOMMENDATIONS_FAILURE }
}

export function loadMovie(id) {
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
            .then(response => response.json())
            .then(movie => dispatch(loadMovieSuccess(movie)))
            .catch(error => {
                dispatch(loadMovieFailure())
                alert('We could not load the page at this time.')
            })
    }
}

export function loadRecommendations(id) {
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
            .then(response => response.json())
            .then(recommendations => dispatch(loadRecommendationsSuccess(recommendations)))
            .catch(error => {
                dispatch(loadRecommendationFailure())
                alert('We could not load the page at this time.')
            })
    }
}