import React from 'react'
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Man from './pages/Man/Man.jsx'
import Woman from './pages/Woman/Woman.jsx'
import Signup from './pages/Signup/Signup.jsx'

import './App.css'

function App() {


  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route 
          path="/" element={<Home/>}
        />
        <Route 
          path="/Man" element={<Man/>}
        />
        <Route 
          path="/Woman" element={<Woman/>}
        />
        <Route 
          path="/Signup" element={<Signup/>}
        />
        <Route 
          path="*" element={<Home/>}
        />
      </Routes>
    </div>
  );
}

export default App;
