import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
/*Pages*/
import Welcome from "./pages/welcome.js"
import Home from './pages/home';
import Games from "./pages/games"
import CreateGame from './pages/createGame';
import Details from './pages/details';

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/games' element={<Games/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/create-game' element={<CreateGame/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
