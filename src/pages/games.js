import {useState} from "react";
import "../styles/games.css";
import { useCrossFilters1 } from "../customHooks/useCrossFilters";
/*Assets*/
import videogames from "../assets/videogames.png";
/*Components*/
import ResponsiveAppBar from "../components/navbar";
import SwiperVertical from "../components/swiperVertical";
import Cards from "../components/cards"

function Games() {

  const {games, requiredGames, checkedGames, useCheckbox, writting, box2} = useCrossFilters1()

  /*Al clickear el "buttonScroll" baja la pantalla 700px sobre el eje Y*/
  const [visibility, setVisibility] = useState()
  const buttonScroll = ()=> {
    window.scrollTo(0, 700)
  }

  /*Cuando la pantalla tiene más de 550px sobre el ejeY el nav se oculta, de lo contrario esá visible*/
  window.onscroll = ()=> {
    if (window.scrollY >= 550){
      setVisibility("hidden")
    } else {
      setVisibility("visible")
    }
  }

  return (
    <>
      <header className="header-home">
        <ResponsiveAppBar visibility={visibility? visibility : null} />
      </header>


      <main className="main-games">

        <div className="div1-games">
          <div className="subdiv1-games">
            <div className="sub-subdiv1-games">
              <div className="container-title-games">
              <h2>Search, interact and share</h2>
              <h3>If your game is not found add it yourself</h3>
              </div>
              <div className="container-buttonScroll-games">
                <button onClick={buttonScroll} >Get started</button>
              </div>
            </div>
            <div className="sub-subdiv2-games" >
              <img src={videogames} />
            </div>
          </div>
          <div className="subdiv2-games">
            <div className="sub-subdiv3-games">
              <input onKeyUp={writting} placeholder="Search your game" />
              {box2?.map(element => (
                
                <div key={element} >
                  <label><input onClick={useCheckbox} type="checkbox" value={element} /> {element}</label>
                </div>
               
              ))}
            </div>
            <div className="sub-subdiv4-games">
              <Cards games={games} requiredGames={requiredGames} checkedGames={checkedGames}/>
            </div>
          </div>
        </div>
        <div className="div2-games">
          <SwiperVertical/>
        </div>
      </main>
    </>
  );
}

export default Games;
