import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as movieActions from '../../actions/movieActions'

class Movie extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            movie: {},
            recommendations: [],
            similar: [],
        }
    }

    componentDidMount(){
        const { movieActions, match } = this.props;

        movieActions.loadMovie(match.params.id);
        movieActions.loadRecommendations(match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            movie: nextProps.movie,
            recommendations: nextProps.recommendations,
        })
    }

    render() {
        const { movie } = this.state

        return (
            <section className="container main movie" style={{backgroundImage: movie.id ? `url(https://image.tmdb.org/t/p/w342/${movie.backdrop_path})` : ''}}>
                <div className="overlay"></div>
                <header className="row">
                    <div className="col-12">
                        <h1 style={{color: 'white'}}>{movie.id ? movie.title : 'Loading...'}</h1>
                    </div>
                </header>
                <article className="row movie-item">
                    <footer className="col-md-4 offset-md-1 my-4 movie-poster" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w342/${movie.poster_path})`}}>

                    </footer>
                    <div className="col-md-6 my-4">
                        <header className="w-100">
                            <h1>{movie.title}</h1>
                        </header>
                        <p className="d-block">{movie.overview}</p>
                    </div>
                </article>
                <article className="row similar-item">
                    <div className="similares">
                        Pelis similares:
                    </div>
                </article>

            </section>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        movie: state.movie,
        recommendations: state.recommendations,
    }
}

function mapDispatchToProps(dispatch){
    return {
        movieActions: bindActionCreators(movieActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)

