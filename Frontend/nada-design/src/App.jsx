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
import CollaboratePage from './pages/CollaboratePage';
import Articles from './pages/Article';
import VideosSection from './pages/Videossection';
import Whistleblower from './pages/Whistleblower';
import Prevyeardata from './pages/Prevyeardata';


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
        <Route path="/collaborate" element={<CollaboratePage />} />
        <Route path="/article" element={<Articles />} />
        <Route path="/videos" element={<VideosSection />} />
        <Route path="/whistleblower" element={< Whistleblower/>} />
        <Route path="/prevdata" element={< Prevyeardata/>} />

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

export default App;