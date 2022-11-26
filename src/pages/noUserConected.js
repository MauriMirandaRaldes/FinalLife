import React, { useEffect } from "react"
/*Redux*/
import {useSelector, useDispatch} from "react-redux"

function NoUserConected (){

    return (
        <div>
            <h2>No hay usuario conectado</h2>
        </div>
    )
}

export default NoUserConected