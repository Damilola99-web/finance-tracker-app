import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

// css
import './signup.css';

export default function Signup() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ displayName, setDisplayName ] = useState('');
    const [confirm, setConfirm] = useState('')
    const [formerror, setFormError] = useState(false)
	const {signup, isPending, error} = useSignup()
	const handleSubmit = (e) => {
		e.preventDefault();
		setFormError(null)
		if (confirm === password) {
            signup(email, password, displayName);
        } else {
            setFormError('Passwords Must Match')
        }
	};
	return (
		<form className="login-form" onSubmit={handleSubmit}>
			<h2>Sign Up</h2>
            {error && <p className='error'>{error}</p>}
            {formerror && <p className='error'>{formerror}</p>}
			<label>
				<span>Username:</span>
				<input type="text" onChange={(e) => setDisplayName(e.target.value)} value={displayName} required/>
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
				<input type="password" onChange={(e) => {setConfirm(e.target.value); setFormError(null)} }required />
			</label>
			{!isPending && <button className="btn">Sign Up</button>}
			{isPending && <button className="btn">Loading...</button>}
			
		</form>
	);
}
