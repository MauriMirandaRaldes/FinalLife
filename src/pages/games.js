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
  const [requiredGames, setRequiredGames] = useState()
  const [checkedGames, setCheckedGames] = useState([])
  
  /*Hago el llamado a todos los juegos que tengo en mi base de datos de Mongo y los guardo en la const "games"*/
  useEffect(() => {
    axios
    .get("http://localhost:8000/api/allGames")
    .then((res) => setGames(res.data.response));
  }, []);

  /*Creo la función encargada de recopilar los datos de mi input tipo texto y los guardo en la const "requiredGames"*/
  const writting = (e)=> {
    let text = e.target.value
    let mayus = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    let filterGames = games.filter(element => element.name.startsWith(mayus))
    if (filterGames){
      setRequiredGames([...filterGames])
    }
  }

  /*En la const "box" guardo los géneros de cada juego*/
  const box = []
  games.map(element => box.push(element.gender))

  /*En la const "box2" guardo los géneros de cada juego sin repeticiones*/
  const box2 = []
  if (box){
    const once = new Set (box)
    box2.push(...once)
  }

  /*La variable "box3" la uso para pushear los elementos filtrados por género al clickear un checkbox*/
  var box3 = []
  const useCheckbox = (e)=> {
    if (e.target.checked){
      const filterGames = games.filter(element => element.gender == e.target.value)
      box3.push(...filterGames)
      const once = new Set (box3)
      box3 = [...once]
      setCheckedGames([...checkedGames, ...box3])
    } else {
      const filterGames = checkedGames.filter(element => element.gender !== e.target.value)
      if (filterGames){
        setCheckedGames([...filterGames])
      }
    }
  }

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
              {box2?.map(element => {
                let render =
                <div key={element} >
                  <label><input onClick={useCheckbox} type="checkbox" value={element} /> {element}</label>
                </div>
                return render
              })}
            </div>
            <div className="sub-subdiv4-games">
              <Cards allGames={games? games : null} inputText={requiredGames? requiredGames : null} inputCheckbox={checkedGames.length > 0? checkedGames : null}  />
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
