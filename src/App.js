import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Missing from './pages/Missing';
import Signup from './pages/Signup';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="*" element={<Missing />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
