import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
/*Pages*/
import Welcome from "./pages/welcome.js"
import Home from './pages/home';
import Games from "./pages/games"

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/games' element={<Games/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
