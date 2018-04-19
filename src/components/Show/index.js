import React from 'react'
import { Link } from 'react-router-dom'

const Show = ({ poster_path, id, name, overview }) => (
    <article
        className="col-md-3 my-4 show-item"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w342/${poster_path})` }}
    >
        <div className="overlay">
            <header className="w-100 pt-3 px-3">
                <Link className="d-block" to={`/shows/${id}`}>{name}</Link>
            </header>
            <p>{overview}</p>
        </div>
    </article>
)

export default Show