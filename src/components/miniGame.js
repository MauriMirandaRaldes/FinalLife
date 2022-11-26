import React,{useState, useEffect} from "react"

export default function MiniGame (){

    return (
        <div className="minigame">
            <div className="containerTop">
                <div className="count"></div>
                <div><img className="smileImg" src="https://e7.pngegg.com/pngimages/63/661/png-clipart-emoji-domain-emoticon-frown-smile-emoji-love-orange.png" /></div>
                <div className="subcontainerRight"></div>
            </div>
            <div className="containerBottom">
                <div className="containerBoxes">
                    
                </div>
            </div>
        </div>
    )
}