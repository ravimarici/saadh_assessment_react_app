import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";

function App() {
 
  return (
    <div>
    <Router>
        <Routes> 
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<SignIn/>} />          
        </Routes>
    </Router>
    </div>
  );
}

export default App;
