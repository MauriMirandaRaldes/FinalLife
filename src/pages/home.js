import React from "react";
import "../styles/home.css"
import {useSelector} from "react-redux"
/*Components*/
import ResponsiveAppBar from "../components/navbar";
import SwipperInfo from "../components/swiperInfo";

function Home() {

  const userConected = useSelector(store => store.userReducer.sucessMessageSignIn)

  return (
    <>
      <header className="header-home" >
        <ResponsiveAppBar/>
      </header>
      <main className="main-home relative">
        <SwipperInfo/>
      {userConected? <p className="userConected">{userConected}</p> : null}
      </main>
      <footer className="footer-home">
        <div><p><b>Mr.Games</b></p></div>
        <div><p>Mr.Games Agent S.t - R.M. Argentina Inscription 1 NIF B-62084592</p></div>
        <div><p>"Acá irian los iconitos de las redes sociales"</p></div>
      </footer>
    </>
  );
}

export default Home;