import axios from "axios"

const gamesActions = {

    getOneGame: (id)=> {
        return async (dispatch, getState)=> {
            let data = await axios.get(`http://localhost:8000/api/allGames/${id}`)
            dispatch({
                type: "getOneGame",
                payload: data.data.response
            })
        }
    }

}

export default gamesActions