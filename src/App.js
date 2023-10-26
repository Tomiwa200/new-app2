import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    
      <Router>
      <>
        <Header />
        
        <Routes>
          <Route exact path="/" element={<Home/>} />    
          <Route exact path="/about" element={<About/>} />    
          <Route exact path="/contact" element={<Contact/>} />    
          <Route exact path="/login" element={<Login />} />    
        </Routes>
        <Footer />
      </>
      </Router>
    
  );
}

export default App;
