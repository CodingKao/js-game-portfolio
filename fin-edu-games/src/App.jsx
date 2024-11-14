// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import './App.css';

// Import the game components and other pages
import HomePage from './components/pages/homepage/Homepage';
import Game1 from './components/pages/Game1';
import Game2 from './components/pages/Game2';
import Game3 from './components/pages/Game3';
import Game4 from './components/pages/Game4';
import Game5 from './components/pages/Game5';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game1" element={<Game1 />} />
            <Route path="/game2" element={<Game2 />} />
            <Route path="/game3" element={<Game3 />} />
            <Route path="/game4" element={<Game4 />} />
            <Route path="/game5" element={<Game5 />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
