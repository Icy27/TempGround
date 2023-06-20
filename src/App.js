import "./App.css";
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./contents/HomePage";
import About from "./contents/About";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="Nav">
          <Navbar />
        </div>
        <div className="Container">
          <div className="Search">
            <h1>Search</h1>
          </div>

          <div className="Home">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
