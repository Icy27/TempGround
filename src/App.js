import './App.css'
import NavigationBar from './components/navigation/NavigationBar'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './contents/Home';
import HomePage from './contents/HomePage';
import About from './contents/About';

const App= () => {
    return (
        <Router>
        <div className='App'>
            
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route index element={<HomePage/>} />
                        <Route path='/About' element={<About/>} />
                    </Route>
                </Routes>
            
        </div>
        </Router>
    )
    
}

export default App