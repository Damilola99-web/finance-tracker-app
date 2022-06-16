import { useAuthContext } from '../hooks/useAuthContext';
import { Navigate } from 'react-router-dom';

const VisitorRoute = ({ children }) => {
	const { user } = useAuthContext();

	if (user) {
		return <Navigate to="/" />;
	}
	else {
		return children;
	}
};

export default VisitorRoute;
