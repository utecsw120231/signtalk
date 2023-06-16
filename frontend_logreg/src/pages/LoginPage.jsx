import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './LoginPage.css'

const API = import.meta.env.VITE_API_URL;

export default function LoginPage() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();

    const loginUser = async (e)  => {
        e.preventDefault();//Para que no se recarge la pagina y la terminal

        console.log(API);//Para comprobar que si escucha a mi API

        const response = await fetch(`${API}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username, password
            })
        });

        const data = await response.json();
        console.log(data);
        
        //MANEJO DE ERRORES DESDE EL FRONTEND, desde el backend resivimos el response con un atributo message
        if (data && !data.error && data.message=="Usuario encontrado") {
            //navigate('/login');
        }
    }

    return (
        <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <form>
            <div className="user-box">
            <input 
                type="username" 
                name="username" 
                onChange={(e) => setUsername(e.target.value)} 
                value={username}
                required
                />
            <label>Username</label>
            </div>
            <div className="user-box">
            <input 
                type="password" 
                name="password" 
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
                required     
                />
            <label>Password</label>
            </div>
            <div className="button-form">
            <a id="submit" href="#" onClick={loginUser}>Iniciar Sesión</a> 
            <div id="register">
                <p>Don't have an account? <a href="/register">Register</a></p>
            </div>
            </div>
        </form>
        </div>
    );
}
