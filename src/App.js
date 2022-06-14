
import './App.css';
import TopBar from './component/TopBar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
 
     <Router>  
      <Routes>
      <Route path='/'>
          <TopBar />
      </Route>

      <Route path='/home'>
          <Home />
      </Route>
    </Routes>
    </Router>
  

  );
}

export default App;
