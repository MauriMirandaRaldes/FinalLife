import {useEffect, useState} from  "react"
import { useParams, Link as LinkRouter } from "react-router-dom"
import "../styles/details.css"
/*Redux*/
import {useDispatch, useSelector} from "react-redux"
import gamesActions from "../redux/actions/gamesActions"
/*Components*/
import SwiperOpacity from "../components/swiperOpacity"
import Comments from "./comments"

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
                    <div className="containerTitle-details"><h2 className="noMargin">{data? data.name : null}</h2></div>
                    <div className="containerStory-details"><p className="noMargin">{data? data.story : null}</p></div>
                    <div>
                        <ul>
                        <li>Gender: {data? data.gender : null}</li>
                        <li>Platform: {data? data.platform : null}</li>
                        </ul>
                    </div>
                </div>
                <div className="subdiv2-details">
                    <Comments commentsData={data? data.comments : null} id={id} />
                    <button>Add favourites</button>
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