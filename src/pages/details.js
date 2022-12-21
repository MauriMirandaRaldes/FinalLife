import {useEffect} from  "react"
import { useParams, Link as LinkRouter } from "react-router-dom"
import "../styles/details.css"
/*Redux*/
import {useDispatch, useSelector} from "react-redux"
import gamesActions from "../redux/actions/gamesActions"
// import gamesActions from "../features/games/gamesActions"
/*Components*/
import SwiperOpacity from "../components/swiperOpacity"

function Details (){

    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(gamesActions.getOneGame(id))
    },[])

    /*En la const "selector" guardo la info de la card qué hice click*/
    const data = useSelector(store => store.gamesReducer.oneGame)

    return (
        <div className="container-details">

            <div className="div1-details">
                <div className="subdiv1-details">
                <h2>{data? data.name : null}</h2>
                <p>{data? data.story : null}</p>
                </div>
                <div className="subdiv2-details">
                    <LinkRouter to="/games" >
                    <button>Go Back</button>
                    </LinkRouter>
                </div>
            </div>
            <div className="div2-details">
                <SwiperOpacity/>
            </div>

        </div>
    )
}

export default Details