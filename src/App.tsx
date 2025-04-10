import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/resume">About</Link>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
    </>
  );
}

export default App;
