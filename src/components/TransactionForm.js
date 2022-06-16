import React, { useState } from 'react';
import { useEffect } from 'react';
import { useFirestore } from '../hooks/useFirestore';

export default function TransactionForm({uid}) {
  const {addDocument, response} = useFirestore('transactions')
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault()
        addDocument({uid, name, amount})
    }
    // resetting the form fields 
    useEffect(()=>{if (response.success) {
      setName('')
      setAmount('')
    }},[response.success])
  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
          <label>
              <span>Transaction Name:</span>
              <input type="text" required onChange={(e)=> setName(e.target.value)}  value={name} />
          </label>
          <label>
              <span>Transaction Amount ($):</span>
              <input type="number" required onChange={(e)=> setAmount(e.target.value)}  value={amount} />
          </label>
          {!response.isPending && <button>Add Transaction</button>}
          {response.isPending && <button>Loading...</button>}
      </form>
    </>
  );
}
