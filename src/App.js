import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import {Routes, Route} from  'react-router-dom';
import About from './components/AboutPage';
import Skills from './components/SkillsPage';


function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
      
      { <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
      </Routes> }
    </div>
  );
}

export default App;
