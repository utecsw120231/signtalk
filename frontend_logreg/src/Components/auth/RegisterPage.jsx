import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import './RegisterPage.css'

// const API = process.env.REACT_APP_API;//Solo creamo una carpeta .env
const API = import.meta.env.VITE_API_URL;

export default function RegisterPage() {
    
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    

    const navigate = useNavigate();

    const registerUser = async (e)  => {
        e.preventDefault();//Para que no se recarge la pagina y la terminal

        console.log(API);//Para comprobar que si escucha a mi API

        const response = await fetch(`${API}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, username, email, password
            })
        });

        const data = await response.json();
        console.log(data);
        
        //MANEJO DE ERRORES DESDE EL FRONTEND, desde el backend resivimos el response con un atributo message
        if (data && !data.error && data.message=="Usuario creado exitosamente") {
            navigate('/auth/login');
        }
    }

  return (
    <div className="register-box">
      <h2>Create an account</h2>
      <form>
        <div className="user-box">
          <input 
            type="text" 
            name="name" 
            onChange={(e) => setName(e.target.value)} 
            value={name}
            required     
            />
          <label>Name</label>
        </div>
        <div className="user-box">
          <input 
            type="text" 
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username} 
            required  />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input 
            type="email" 
            name="email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            required
            />
          <label>Email</label>
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
          <a id="submit" href="#" onClick={registerUser}>Submit</a> 
          <div id="login">
            <p>Already have an account? <a href="/auth/login">Login</a></p>
          </div>
        </div>
      </form>
    </div>
  );
}
