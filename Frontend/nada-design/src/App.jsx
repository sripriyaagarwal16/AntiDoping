import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Player from './pages/Player';
import Login from './pages/Login';
import Navbar from './components/Navbar/Navbar';
import Assesment from './pages/Assesment';
import HandBook from './pages/HandBook';
import Quiz from "./components/Quiz/Quiz";

// import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/player" element={<Player/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/assessment/:playerId" element={<Assesment />} />
        <Route path="/handbook" element={<HandBook/>} />

       
        <Route path="/quiz/:id" element={<Quiz />} />    

      </Routes>
    </Router>
  );
};

export default App;
