import "./App.css";
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./contents/HomePage";
import About from "./contents/About";
import SearchBar from './components/searchbar/SearchBar'
import Dropdown from './components/dropdown/Dropdown'

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="Nav">
          <Navbar />
        </div>
        <div className="Container">
          <div className="TopBar">
            <SearchBar />
            <Dropdown />
          </div>

          <div className="Main">
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
