import React from 'react';
import TransactionForm from '../components/TransactionForm';
import { useAuthContext } from '../hooks/useAuthContext';

// css
import './home.css';

export default function Home() {
  const { user } = useAuthContext();
	return (
		<div className="container">
			<div className="content">Transaction list </div>
			<div className="sidebar">
				<TransactionForm uid={user.uid} />
			</div>
		</div>
	);
}
