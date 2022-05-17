import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Componentes/Navbar/Navbar';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar/>}/>        
      </Routes>
    </Router>    
  );
}

export default App;
