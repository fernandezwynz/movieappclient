import React, { createContext, useState } from 'react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const notyf = new Notyf();

    const login = async (email, password) => {
        try {
            const response = await fetch('https://movieapp-api-lms1.onrender.com/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                setUser(data);
                notyf.success('Login successful');
            } else {
                notyf.error(data.message || 'Login failed');
            }
        } catch (error) {
            notyf.error('Login failed');
        }
    };

    const register = async (email, password) => {
        try {
            const response = await fetch('https://movieapp-api-lms1.onrender.com/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                setUser(data);
                notyf.success('Registration successful');
            } else {
                notyf.error(data.message || 'Registration failed');
            }
        } catch (error) {
            notyf.error('Registration failed');
        }
    };

    const logout = () => {
        setUser(null);
        notyf.success('Logout successful');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};