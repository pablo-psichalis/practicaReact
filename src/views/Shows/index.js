import React from 'react';
import * as showsActions from '../../actions/showsActions'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Show from '../../components/Show'

class Shows extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            shows: [],
            page: 1,
            loadingShows: false,
            nowViewing: 'popular',
            viewingThisYearOnly: false,
        }
    }

    componentDidMount() {
        const { shows, nowViewing, page } = this.state;
        const { showsActions } = this.props;

        showsActions.loadShows(page, nowViewing);

        window.addEventListener("scroll", this.infiniteScroller, false);
    }

    componentWillUnmount() {
        // you need to unbind the same listener that was binded.
        window.removeEventListener('scroll', this.infiniteScroller, false);
    }

    infiniteScroller = e => {
        const { showsActions } = this.props
        const { page, nowViewing } = this.state
        const scrollTop = window.scrollY
        const trackLength = document.querySelector('body').scrollHeight - window.innerHeight
        const pctScrolled = Math.floor(scrollTop / trackLength * 100)
        if (pctScrolled > 95 && !this.state.loadingShows) {
            showsActions.loadShows(page, nowViewing)
            this.setState({
                loadingShows: true
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.shows.length > this.state.shows.length) {
            this.setState({
                loadingShows: false,
                page: this.state.page + 1,
                shows: nextProps.shows,
            })
        } else {
            this.setState({
                shows: nextProps.shows,
                loadingShows: false
            })
        }
    }

    fiterShows = shows => {
        return shows.filter(show => {
            console.log(show.first_air_date, show.first_air_date.includes('2018'))
            return show.first_air_date.includes('2018')
        })
    }

    prepareShows = shows => {
        const { viewingThisYearOnly } = this.state
        let filteredShows = viewingThisYearOnly ? this.filteredShows(shows) : shows
        console.log(filteredShows.length)
        return filteredShows
    }


    render() {
        const { shows, nowViewing } = this.state
        return (
            <section className="container main shows">
                <header className="row">
                    <div className="col-12">
                        <h1>{shows.length > 0 ? 'TV Shows' : 'Loading...'}</h1>
                    </div>
                </header>
                <div className="row show-list-wrapper">
                    {shows.map((show, i) => {
                        console.log(show)
                        return (
                            <Show
                                key={i}
                                {...show}
                            />
                        )
                    })}
                </div>
            </section>
        )
    }
}


function mapStateToProps(state, ownProps) {
    return {
        shows: state.shows
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showsActions: bindActionCreators(showsActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shows)
