import React, { useState } from 'react';

// css
import './signup.css';

export default function Signup() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ username, setUsername ] = useState('');
    const [confirm, setConfirm] = useState('')
    const [error, setError] = useState(false)
	const handleSubmit = (e) => {
		e.preventDefault();
		if (confirm === password) {
            console.log(username, email, password);
        } else {
            setError('Passwords Must Match')
        }
	};
	return (
		<form className="login-form" onSubmit={handleSubmit}>
			<h2>Sign Up</h2>
            {error && <p className='error'>{error}</p>}
			<label>
				<span>Username:</span>
				<input type="text" onChange={(e) => setUsername(e.target.value)} value={username} required/>
			</label>
			<label>
				<span>Email:</span>
				<input type="email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
			</label>
			<label>
				<span>Password:</span>
				<input type="password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
			</label>
			<label>
				<span>Confirm Password:</span>
				<input type="password" onChange={(e) => setConfirm(e.target.value)} required />
			</label>
			<button className="btn">Sign Up</button>
		</form>
	);
}
