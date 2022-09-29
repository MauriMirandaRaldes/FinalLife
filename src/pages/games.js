import React, { useState, useEffect } from "react";
import "../styles/games.css";
import axios from "axios";
/*Assets*/
import videogames from "../assets/videogames.png";
/*Components*/
import ResponsiveAppBar from "../components/navbar";
import SwiperVertical from "../components/swiperVertical";
import fewGames from "../games.json";
import Cards from "../components/cards"

function Games() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allGames")
      .then((res) => setGames(res.data.response));
  }, []);

  const getStarted = () => {
    window.scrollTo(0, 700);
  };

  return (
    <>
      <header className="header-home">
        <ResponsiveAppBar />
      </header>

      <main className="main-games">
        <div className="div1-games">
          <div className="subdiv1-games">
            <div className="sub-subdiv1-games">
              <h2>Search, interact and share</h2>
              <h4>If your game is not found add it yourself</h4>
            </div>
            <div className="sub-subdiv2-games" >
              <img src={videogames} />
            </div>
          </div>
          <div className="subdiv2-games">
            <div className="sub-subdiv3-games">
              <input/>
            </div>
            <div className="sub-subdiv4-games">
              <Cards allGames = {games? games : null}/>
            </div>
          </div>
        </div>
        <div className="div2-games">
          <SwiperVertical/>
        </div>
      </main>

      <footer>

      </footer>
    </>
  );
}

export default Games;
