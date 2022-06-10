import { useEffect, useState } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';
export const useSignup = () => {
	const [ isCancled, setIsCanceled ] = useState(false);
	const [ error, seterror ] = useState(null);
	const [ isPending, setIsPending ] = useState(false);
	const { dispatch } = useAuthContext();
	const signup = async (email, password, displayName) => {
		seterror(null);
		setIsPending(true);
		try {
			const res = await projectAuth.createUserWithEmailAndPassword(email, password);
			if (!res) {
				throw new Error('Could not complete signup');
			}
			await res.user.updateProfile({ displayName });

			// dispatch function
			dispatch({ type: 'LOGIN', payload: res.user });

			setIsPending(false);
			seterror(null);
		} catch (error) {
			seterror(error.message);
			setIsPending(false);
		}
	};

	useEffect(() => {
		return () => setIsCanceled(true);
	}, []);

	return { error, isPending, signup };
};
