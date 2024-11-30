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
import TopicList from './components/Quiz/TopicList';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/player" element={<Player />} />
        <Route path="/login" element={<Login />} />
        <Route path="/assessment/:playerId" element={<Assesment />} />
        <Route path="/handbook" element={<HandBook />} />
        
        {/* Quiz Routes */}
        <Route path="/quiz" element={<TopicList />} /> {/* Show quiz topics */}
        <Route path="/quiz/:topicId" element={<Quiz />} /> {/* Individual quiz */}

        {/* 404 Route - Keep it last */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">404</h1>
              <p className="text-xl">Page not found</p>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;