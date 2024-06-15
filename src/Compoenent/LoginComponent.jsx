import * as React from 'react';
import {useState} from 'react';
import '../App.css';
import { useNavigate  } from 'react-router-dom';
import {createContext} from "react";

export const LoginComponent = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const Authcontext=new  createContext();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:3001/api/login/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userName, password }),
        });
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.jwtToken)
            console.log(" data" + data.jwtToken);
            navigate('/home');
        }
        else
        {
            alert('Login failed!');
        }

    };
    return (
        <div>
         
            <div className="login-container">
                <form className="login-form" onSubmit={() => navigate('/home')}>
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>
    );
};