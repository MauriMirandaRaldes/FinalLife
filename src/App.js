import React,{useEffect} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
/*Redux*/
import {useDispatch, useSelector} from "react-redux"
import userActions from './redux/actions/userActions';
/*Pages*/
import Welcome from "./pages/welcome.js"
import Home from './pages/home';
import Games from "./pages/games"
import Details from './pages/details';
import NoUserConected from "./pages/noUserConected"
import CreateGame from './pages/createGame';
import Registration from './pages/registration';
import MyAccount from "./pages/myAccount"

function App() {

  const dispatch = useDispatch()
  const user = useSelector(store => store.userReducer.user) // para que se actualice el usuario de user fue necesario crear un reducer cuando hago signOut, que vuelva el estado de user a null nuevamente

  /*El uso del hook useEffect es de suma importancia, ya que de lo contrario se genera un bucle*/
  useEffect(()=> {
    if (localStorage.token){
      const token = localStorage.getItem("token")
      dispatch(userActions.verifyToken(token))
    }
  },[])

  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/games' element={<Games/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      {!user? <Route path='/noUserConected' element={<NoUserConected/>}/> : <Route path='/createGame' element={<CreateGame/>}/> }
      {!user? null : <Route path="/myAccount" element={<MyAccount/>} />}
      <Route path="/registration" element={<Registration/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
