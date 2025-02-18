import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <h3>{movie.title}</h3>
            <p>{movie.director}</p>
            <p>{movie.year}</p>
            <p>{movie.genre}</p>
            <button>View Movie</button>
        </div>
    );
};

export default MovieCard;