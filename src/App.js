import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

//import semua komponen
import NavBar from './component/NavBar';
import Home from './component/Home';
import About from './component/About';
import Technology from './component/Technology';
import Sport from './component/Sport';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/technology" element={<Technology />}/>
              <Route path="/sport" element={<Sport />}/>
              <Route path="/about" element={<About />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
