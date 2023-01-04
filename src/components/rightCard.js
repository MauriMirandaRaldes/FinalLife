import {useState, useEffect} from "react"
import gamesPhrases from "../gamesPhrases.json"

export default function RightCard (){

    var number = Math.floor(Math.random()*30)
    const [reload, setReload] = useState(false)
    const [randomPhrase, setRandomPhrase] = useState()
    
    // Cuando cambia el valor de reload, se ejecuta lo que está acá dentro. No entiendo a profundidad por qué razón el valor de la variable number también se modifica dentro del useEffect
    useEffect(()=> {
        setRandomPhrase(gamesPhrases.filter((element, index) => index === number))
    },[reload])

    return (
        <div className="containerRightCard">
            {randomPhrase?.length > 0? reload?
            <div className="eachPhrase">
                <div className="containerPhrase">
                 <p className="phrase">{randomPhrase[0].phrase}</p>
                </div>
                <div className="containerAutorPhrase">
                  <img title={randomPhrase[0].autor} src={randomPhrase[0].photo}/>
                  <p className="autorPhrase" >{randomPhrase[0].autor}</p>
                </div>
                <button onClick={()=> setReload(!reload)}>Change phrase</button>
            </div> :  <div className="eachPhrase2">
                <div className="containerPhrase">
                 <p className="phrase">{randomPhrase[0].phrase}</p>
                </div>
                <div className="containerAutorPhrase">
                  <img title={randomPhrase[0].autor} src={randomPhrase[0].photo}/>
                  <p className="autorPhrase" >{randomPhrase[0].autor}</p>
                </div>
                <button onClick={()=> setReload(!reload)}>Change phrase</button>
            </div>
            : <p>Loading..</p>}
        </div>
    )
}