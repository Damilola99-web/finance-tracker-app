import { useEffect, useState } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
	const [ isCancled, setIsCanceled ] = useState(false);
	const [ error, setError ] = useState(null);
	const [ ispending, setIsPending ] = useState(false);
	const { dispatch } = useAuthContext();

	const login = async (email, password) => {
		setIsPending(true);
		setError(null);

		// logout function

		try {
			const res = await projectAuth.signInWithEmailAndPassword(email, password);

			dispatch({ type: 'LOGIN', payload: res.user });

			
				setIsPending(false);
				setError(null);
			
		} catch (error) {
			
				console.log(error.message);
				setError(error.message);
				setIsPending(false);
			
		}
	};

	useEffect(() => {
		return () => setIsCanceled(true);
	}, []);

	return { login, ispending, error };
};
