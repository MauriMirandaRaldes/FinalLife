import {useState, useEffect} from "react"
import axios from "axios"

/*Fetcheo todos los juegos*/
const useFetchGames = ()=> {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:8000/api/allGames")
    .then((res) => setGames(res.data.response))
  
  }, []);

  return {games}
}

export const useCrossFilters1 = ()=> {
  const [requiredGames, setRequiredGames] = useState()
  const [checkedGames, setCheckedGames] = useState([])
  const {games} = useFetchGames()

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

  return {games, requiredGames, checkedGames, useCheckbox, writting, box2}

}


export const useCrossFilters = ({games, requiredGames, checkedGames})=> {

    /*Realizo el filtro cruzado entre el input de texto y los checkboxs*/
    const box = [];
    const box2 = [];
    if (requiredGames) {
       requiredGames.map((element) => {
         box.push(element);
         if (checkedGames.length > 0) {
           checkedGames.map((element2) => {
             let filterBox = box.filter(element3 => element3.gender == element2.gender);
            box2.push(...filterBox);
          });
        } else {
          box2.push(...requiredGames)
        }
      });
    } else {
      if (checkedGames.length > 0) {
        box2.push(...checkedGames);
      } else {
        box2.push(...games)
      }
    }
  
    /*En la const "finalBox" guardo los datos recopilados de mis inputs y gracias al new Set los seteo sólo una vez*/
    const finalBox = [];
    if (box2.length > 0) {
      const once = new Set(box2);
      finalBox.push(...once);
    }
  
    /*En la const "allNames" guardo los nombres de cada juego, ordenados de manera alfabética*/
    const allNames = [];
    games?.map((element) => allNames.push(element.name));
    allNames.sort();
  
    // /*En la const "orderElements" guardo los datos finales de mis filtros cruzados, seteados con el new Set y ordenados de la A a la Z*/
    const orderElements = [];
    if (finalBox.length > 0) {
      allNames.map((element) => {
        let filterFinalBox = finalBox.filter(
          (element2) => element2.name == element
        );
        orderElements.push(...filterFinalBox);
      });
    }
  
    return {orderElements}
}