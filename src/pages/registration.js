import {useState} from "react"
import LeftCard from "../components/leftCard"
import "../styles/registration.css"
import RightCard from "../components/rightCard"

export default function Registration (){

    return (
        <div className="container" >
            <LeftCard/>
            <RightCard/>
        </div>
    )
}