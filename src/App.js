import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Missing from './pages/Missing';
import Signup from './pages/Signup';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import ProtectedRoute from './pages/ProtectedRoute';
import VisitorRoute from './pages/VisitorRoute';


function App() {
	const { authIsReady } = useAuthContext();
	return (
		<div className="App">
			{!authIsReady && <div className='loading'><div className='animation'></div></div>}
			{authIsReady && (
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
						<Route path="/login" element={<VisitorRoute><Login /></VisitorRoute>} />
						<Route path="/signup" element={<VisitorRoute><Signup /></VisitorRoute>} />
						<Route path="*" element={<Missing />} />
					</Routes>
				</Router>
			)}
		</div>
	);
}

export default App;
