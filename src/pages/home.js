import React from "react";
import "../styles/home.css"
/*Components*/
import ResponsiveAppBar from "../components/navbar";
import SwipperInfo from "../components/swiperInfo";

function Home() {

  return (
    <>
      <header className="header-home" >
        <ResponsiveAppBar/>
      </header>
      <main className="main-home">
        <SwipperInfo/>
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