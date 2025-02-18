import React, { createContext, useState, useEffect } from 'react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const notyf = new Notyf();

    useEffect(() => {
        fetch('https://movieapp-api-lms1.onrender.com/movies/getMovies')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setMovies(data);
                } else {
                    notyf.error('Failed to fetch movies');
                }
            })
            .catch(error => notyf.error('Failed to fetch movies'));
    }, []);

    return (
        <MovieContext.Provider value={{ movies, setMovies }}>
            {children}
        </MovieContext.Provider>
    );
};