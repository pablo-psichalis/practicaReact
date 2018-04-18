import React from 'react';
import showsActions from '../../actions/showsActions'

class Shows extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            shows: [],
            page: 1,
            loadingShows: false,
            nowViewing: 'popular'
        }
    }

    componentDidMount() {
        const { nowViewing, page } = this.state;
        const { showsActions } = this.props;

        showsActions.loadShows();

        window.addEventListener("scroll", this.infiniteScroller, false);
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

    prepareShows = shows => {
        return this.state.shows;
    }


    render() {
        return (
            <section className="container main shows">
                <header className="row">
                    <div className="col-12">
                        <h1>{shows.length > 0 ? 'TV Shows' : 'Loading...'}</h1>
                    </div>
                </header>
                <div className="row show-list-wrapper">
                    {this.prepareShows(shows).map((show, i) => {
                        return (
                            <Movie
                                key={i}
                                {...movie}
                            />
                        )
                    })}
                </div>
            </section>
        )
    }
}