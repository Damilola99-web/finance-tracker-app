import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Missing from "./pages/Missing";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="*" element={<Missing />} />
     </Routes>
     
    </div>
  );
}

export default App;