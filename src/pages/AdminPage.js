import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieForm from '../components/MovieForm';

const AdminPage = () => {
    const { movies } = useContext(MovieContext);

    return (
        <div className="container">
            <h1>Admin Dashboard</h1>
            <MovieForm />
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Director</th>
                        <th>Year</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.director}</td>
                            <td>{movie.year}</td>
                            <td>{movie.genre}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPage;