import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <header>
            <h1>Movie Catalog</h1>
            <nav>
                <Link to="/">Home</Link>
                {user ? (
                    <>
                        {user.isAdmin && <Link to="/admin">Admin</Link>}
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Navbar;