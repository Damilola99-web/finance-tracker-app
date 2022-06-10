import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

// css
import './login.css';

export default function Login() {
	const {login, error, ispending} = useLogin()
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault()
        login(email, password)
    }
	return (
		<form className="login-form" onSubmit={handleSubmit}>
			<h2>Login</h2>
			{error && <p className='error'>{error}</p>}
			<label>
				<span>Email:</span>
				<input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
			</label>
			<label>
				<span>Password:</span>
				<input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
			</label>
			{!ispending && <button className="btn">Login</button>}
			{ispending && <button className="btn" disabled>Loading...</button>}
		</form>
	);
}
