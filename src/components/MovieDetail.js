import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const MovieDetail = ({ match }) => {
    const { movies } = useContext(MovieContext);
    const movie = movies.find(m => m._id === match.params.id);

    if (!movie) return <div>Movie not found</div>;

    return (
        <div className="movie-detail">
            <h2>{movie.title}</h2>
            <p>Director: {movie.director}</p>
            <p>Year: {movie.year}</p>
            <p>Description: {movie.description}</p>
            <p>Genre: {movie.genre}</p>
            {/* Add comments section */}
        </div>
    );
};

export default MovieDetail;