import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import movies from './moviesReducer'
import movie from './movieReducer'
import shows from './showsReducer'
import show from './showReducer'

const rootReducer = combineReducers({
    movies, 
    movie,
    shows,
    show,
    router: routerReducer
})

export default rootReducer
