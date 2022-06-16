import { useAuthContext } from '../hooks/useAuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
	const { user } = useAuthContext();

	if (!user) {
		return <Navigate to="/login" />;
	}
	else {
		return children;
	}
};

export default ProtectedRoute;
