import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';

const HomePage = () => {
    const { movies } = useContext(MovieContext);

    if (!Array.isArray(movies)) {
        return <div>Failed to load movies</div>;
    }

    return (
        <div className="container">
            <h1>Movie Catalog</h1>
            <div className="movie-list">
                {movies.map(movie => (
                    <MovieCard key={movie._id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;