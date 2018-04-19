export const moviesURL = {
    upcoming: page => {
        return `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`
    },
    topRated: page => {
        return `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`
    },
    popular: page => {
        return `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`
    }
}

export const showsURL = {
    airing_today: page => {
        return `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}` 
    },
    topRated: page => {
        return `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`
    },
    popular: page => {
        return `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`
    }

}