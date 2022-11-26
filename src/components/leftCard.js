import React from "react"
import LeftCardBottom from "./leftCardBottom"
import LeftCardTop from "./leftCardTop"

export default function LeftCard (){
    return (
        <div className="containerLeftCard">
            <div className="leftCard">
                <LeftCardTop/>
                <LeftCardBottom/>
            </div>
        </div>
    )
}