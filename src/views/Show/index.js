import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as showActions from '../../actions/showActions'

class Show extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: {}
        }
    }

    componentDidMount() {
        const { showActions, match } = this.props

        showActions.loadShow(match.params.id)
    }

    componentWillReceiveProps({ show }) {
        this.setState({ show })
    }

    render() {
        const { show } = this.state

        return (
            <section className="container main show" style={{ backgroundImage: show.id ? `url(https://image.tmdb.org/t/p/w342/${show.backdrop_path})` : '' }}>
                <div className="overlay"></div>
                <header className="row">
                    <div className="col-12">
                        <h1 style={{ color: 'white' }}>{show.id ? show.original_name : 'Loading...'}</h1>
                    </div>
                </header>
                <article className="row show-item">
                    <footer className="col-md-4 offset-md-1 my-4 show-poster" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w342/${show.poster_path})` }}>

                    </footer>
                    <div className="col-md-6 my-4">
                        <header className="w-100">
                            <h1>{show.original_name}</h1>
                        </header>
                        <p className="d-block">{show.overview}</p>
                    </div>
                </article>
            </section>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        show: state.show
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showActions: bindActionCreators(showActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)

