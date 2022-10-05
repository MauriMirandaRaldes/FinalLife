import React,{useEffect} from  "react"
import { useParams } from "react-router-dom"
import "../styles/details.css"
import {Link as LinkRouter} from "react-router-dom"
/*Redux*/
import {useDispatch, useSelector} from "react-redux"
import gamesActions from "../redux/actions/gamesActions"
// import gamesActions from "../features/games/gamesActions"
/*Components*/
import SwiperAutoplay from "../components/swiperAutoplay"

function Details (){

    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(gamesActions.getOneGame(id))
    },[])

    /*En la const "selector" guardo la info de la card qué hice click*/
    const selector = useSelector(store => store.gamesReducer.oneGame)

    return (
        <div className="container-details">
            <img className="img-background-details" src={selector? selector.image : null} alt={selector? selector.image : null} />
            <div className="div1-details">
                <div className="subdiv1-details">
                <h2>{selector? selector.name : null}</h2>
                <p>{selector? selector.story : null}</p>
                </div>
                <div className="subdiv2-details">
                    <LinkRouter to="/games" >
                    <button>Go Back</button>
                    </LinkRouter>
                </div>
            </div>
            <div className="div2-details">
                <SwiperAutoplay details={selector? selector : null} />
            </div>
        </div>
    )
}

export default Details