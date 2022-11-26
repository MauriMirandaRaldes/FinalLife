import {useState, useEffect} from "react"
import LeftCard from "../components/leftCard"
import RightCard from "../components/rightCard"
import "../styles/registration.css"

export default function Registration (){

    return (
        <div className="container" >
            <LeftCard/>
            <RightCard/>
        </div>
    )
}