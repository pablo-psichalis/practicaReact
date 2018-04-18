import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import movies from './moviesReducer'
import movie from './movieReducer'

const rootReducer = combineReducers({
    movies, 
    movie,
    router: routerReducer
})

export default rootReducer
