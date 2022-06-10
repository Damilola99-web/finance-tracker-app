import { useEffect, useState } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
    const [ isCancled, setIsCanceled ] = useState(false);
	const [ error, setError ] = useState(null);
	const [ ispending, setIsPending ] = useState(false);
	const { dispatch } = useAuthContext();

	const logout = async () => {
		setIsPending(true);
		setError(null);

		// logout function

		try {
			await projectAuth.signOut();

			dispatch({ type: 'LOGOUT' });

			if (!isCancled) {
				setIsPending(false);
				setError(null);
			}
		} catch (error) {
			if (!isCancled) {
				console.log(error.message);
				setError(error.message);
				setIsPending(false);
			}
		}
	};

	useEffect(() => {
		return () => setIsCanceled(true);
	}, []);

	return { logout, ispending, error };
};
