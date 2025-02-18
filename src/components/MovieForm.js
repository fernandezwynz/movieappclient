import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const MovieForm = () => {
    const { setMovies } = useContext(MovieContext);
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const notyf = new Notyf();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://movieapp-api-lms1.onrender.com/movies/addMovie', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, director, year, description, genre }),
            });
            const data = await response.json();
            if (response.ok) {
                setMovies(prevMovies => [...prevMovies, data]);
                notyf.success('Movie added successfully');
            } else {
                notyf.error(data.message || 'Failed to add movie');
            }
        } catch (error) {
            notyf.error('Failed to add movie');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Director" value={director} onChange={(e) => setDirector(e.target.value)} required />
            <input type="number" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} required />
            <button type="submit">Add Movie</button>
        </form>
    );
};

export default MovieForm;