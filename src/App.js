import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { MovieProvider } from './context/MovieContext';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import MovieDetailPage from './pages/MovieDetailPage';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import './App.css';

function App() {
    return (
        <AuthProvider>
            <MovieProvider>
                <Router>
                    <div className="App">
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/admin" element={<AdminPage />} />
                            <Route path="/movie/:id" element={<MovieDetailPage />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Routes>
                    </div>
                </Router>
            </MovieProvider>
        </AuthProvider>
    );
}

export default App;