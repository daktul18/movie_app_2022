import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<><Home /><Navigation /></>}/>
        <Route path="/about" element={<><About /><Navigation /></>}/>
        <Route path='/movie-detail' element={<Detail />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;