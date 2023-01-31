import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Misc from './components/Misc';

function App() {
  return (
    <>
    <Header />
    <Misc />
    <Footer />
    </>
  );
}

export default App;
