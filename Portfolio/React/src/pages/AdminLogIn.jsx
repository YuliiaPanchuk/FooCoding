import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Admin.css';
import { signInWithPassword } from '../api/account';

export function AdminLog() {
  let navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function logIn() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const signedIn = await signInWithPassword(email, password);

    // Check if the user is signed in
    if (signedIn) {
      navigate('/admin');
    } else {
      alert('Invalid user!');
    }
  }

  return (
    <div className="adminDiv">
      <h1>Log in</h1>

      <div className="inputItem">
        <label htmlFor="userName">User name</label>
        <input ref={emailRef} className="adminInput" type="text" name="userName" required />
      </div>

      <div className="inputItem">
        <label htmlFor="password">Password</label>
        <input ref={passwordRef} className="adminInput" type="password" name="password" required />
      </div>

      <div className="logInBtn">
        <button className="logIn" type="submit" onClick={logIn}>
          Log in
        </button>
      </div>
    </div>
  );
}
