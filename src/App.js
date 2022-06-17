
import './App.css';
import TopBar from './component/TopBar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
 

      <>

<BrowserRouter>
<TopBar />
      <Routes>
        
          <Route index element={<Home />} />
          {/* <Route path="/" element={<TopBar/>} /> */}
          <Route path='about'  element={<About />} />
          <Route path='contact'  element={<Contact />} />
          <Route path='services' element={<Services />} />
          <Route path='blogs' element={<Blog />} />
      </Routes>
    </BrowserRouter>

      </>



    
  
      
  );
}

export default App;
