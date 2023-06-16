import React, { } from 'react';

import {Link, Outlet} from 'react-router-dom';

import './Authentication.css';

export default function LandingPage(){
    return(
      <div>
        <div className="container h-100">
            <div className="row h-100 ">
                <div className="col-12">
                    <h1>Welcome to SignTalk</h1>
                    <button type="button" class="btn btn-warning"><Link to="/login">Login</Link></button>
                    <button type="button" class="btn btn-warning"><Link to="/register">Register</Link></button>
                </div>
            </div>
        </div> 
      </div> 
    );
}