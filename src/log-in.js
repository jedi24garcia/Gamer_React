import React, { useState } from 'react';
import './log-in.css';

function UserlogIn() {
  const [email, EmailSet] = useState('');
  const [password, PasswordSet] = useState('');
  const [PasswordRepeat, RepeatPasswordSet] = useState('');

  const SignConfig = () => {
    if (email && password && PasswordRepeat && password === PasswordRepeat) {
      // All fields are filled, and passwords match
      alert('Account created! HAPPY GAMING!');
    } else {
      alert('Please fill out all fields, and make sure the passwords match.');
    }
  };

  return (
    <div className="SignUpSign">
      <h1>Sign Up</h1>
      <div className="SignForm">
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Please enter email" name="email" value={email} onChange={(e) => EmailSet(e.target.value)}/>
        <label for="password"><b>Password</b></label>
        <input type="text" placeholder="Please enter password" name="password" value={password} onChange={(e) => PasswordSet(e.target.value)}/>
        <label for="repeatPassword"><b>Repeat Password</b></label>
        <input type="text" placeholder="Please repeat password" name="repeatPassword" value={PasswordRepeat} onChange={(e) => RepeatPasswordSet(e.target.value)}/>
        <button onClick={SignConfig}>Enter</button>
      </div>
    </div>
  );
}

export default UserlogIn;
