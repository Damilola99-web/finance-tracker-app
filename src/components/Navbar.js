import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
// css
import './navbar.css';

export default function Navbar() {
	const { logout } = useLogout();
	const { user } = useAuthContext();
	return (
		<nav className="navbar">
			{!user && (
				<ul>
					<li className="title">myMoni</li>
					<li>
						<NavLink to="/login">Login</NavLink>
					</li>
					<li>
						<NavLink to="/signup">Sign up</NavLink>
					</li>
				</ul>
			)}
			{user && (
				<button className="btn" onClick={logout}>
					Log Out
				</button>
			)}
		</nav>
	);
}
