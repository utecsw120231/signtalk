
import React, { } from 'react';
import { Outlet } from 'react-router-dom';

export default function Authentication() {
  return (
    <>
      <div class="login-container">
        <input id="item-1" type="radio" name="item" class="sign-in" />
        <label htmlFor="item-1" class="item">Sign In</label>

        <input id="item-2" type="radio" name="item" class="sign-up" />
        <label htmlFor="item-2" class="item">Sign Up</label>
        <div class="login-form">
          <Outlet />
        </div>
      </div>
    </>
  );
}
