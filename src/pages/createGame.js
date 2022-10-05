import React from "react"
/*Redux*/
import {useSelector, useDispatch} from "react-redux"
// import {addGame} from "../features/games/gameSlice"

function CreateGame (){

    const dispatch = useDispatch()

    // const sendData = async (e)=> {
    //     e.preventDefault()
    //     let title = await e.target[0].value
    //     let image = await e.target[1].value
    //     let platform = await e.target[2].value
    //     let gender = await e.target[3].value
    //     let story = await e.target[4].value

    //     let data = {
    //         title: title,
    //         image: image,
    //         platform: platform,
    //         gender: gender,
    //         story: story
    //     }

    //     dispatch(addGame(data))
    // }

    return (

        <div>
            {/* <form onSubmit={sendData}>
                <input placeholder="title"/>
                <input placeholder="image"/>
                <input placeholder="platform"/>
                <input placeholder="gender"/>
                <input placeholder="story"/>
                <button type="submit" >Submit</button>
            </form> */}
        </div>

    )
}

export default CreateGame