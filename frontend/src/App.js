// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import './styles/index.css'
import Section from './components/Section';
function App() {
  return (
    <Router>
      <div className="App">
      
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Section />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
