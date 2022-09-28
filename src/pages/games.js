import React,{useState, useEffect} from "react";
import "../styles/games.css";
import axios from "axios"
/*Assets*/
import videogames from "../assets/videogames.png";
/*Components*/
import ResponsiveAppBar from "../components/navbar";
import fewGames from "../games.json"

function Games() {

    const getStarted = ()=> {
        window.scrollTo(0,700)
    }

  return (
    <>
      <header className="header-home">
        <ResponsiveAppBar />
      </header>

      <main>
        <section className="section1-games">
        <div className="div1-games">
            {fewGames?.map(element => {
                let render = 

                <img key={element.image} className="custom-img-fewGames" src={element.image} />

                return render
            })}
        </div>
        <div className="div2-games">
            <div className="subdiv1-games">
            <h2>Explore, have fun and share your opinion with the community.</h2>
            <h2>If your game is not there, we invite you to add it and make it known :)</h2>
            <button onClick={getStarted} className="button-getStarted">Get started</button>
            </div>
            <div className="subdiv2-games">
            <img src={videogames} />
            </div>
        </div>
        <div className="div1-games">
        {fewGames?.map(element => {
                let render = 

                <img key={element.image2} className="custom-img-fewGames" src={element.image2} />

                return render
            })}
        </div>
        </section>
        <section className="section2-games">
            <div className="div4-games"></div>
            <div className="div3-games">
            <div className="subdiv3-games">
                <input placeholder="Search your game"/>
            </div>
            <div className="subdiv4-games">

            </div>
            </div>
            <div className="div4-games"></div>
        </section>
      </main>

      <footer></footer>
    </>
  );
}

export default Games;
