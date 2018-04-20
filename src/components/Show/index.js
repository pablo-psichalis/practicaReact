import React from 'react'
import { Link } from 'react-router-dom'

const Show = props => {

    return (
        <article
            className="col-md-3 my-4 show-item"
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w342/${props.show.poster_path})` }}
        >
            <div className="overlay">
                <header className="w-100 pt-3 px-3">
                    <Link className="d-block" to={`/shows/${props.show.id}`}>{props.show.name}</Link>
                </header>
                <button className="btn btn-info" onClick={() => props.hideShows(props.show.id)}>Hide</button>
                <p>{props.show.overview}</p>
            </div>
        </article>
    );
}

export default Show