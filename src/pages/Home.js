import React from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollection } from '../hooks/useCollection';

// css
import './home.css';

export default function Home() {
  const { user } = useAuthContext();
  const {document, error} = useCollection('transactions', ['uid', '==', user.uid], ['createdAt', 'desc'])
	return (
		<div className="container">
			<div className="content">
        {error && <p>{error}</p>}
        {document && <TransactionList transactions={document}/>}
      </div>
			<div className="sidebar">
				<TransactionForm uid={user.uid} />
			</div>
		</div>
	);
}
