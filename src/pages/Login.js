import React, { useState } from 'react';

// css
import './login.css';

export default function Login() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(email, password)
    }
	return (
		<form className="login-form" onSubmit={handleSubmit}>
			<h2>Login</h2>
			<label>
				<span>Email:</span>
				<input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
			</label>
			<label>
				<span>Password:</span>
				<input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
			</label>
			<button className="btn">Login</button>
		</form>
	);
}
