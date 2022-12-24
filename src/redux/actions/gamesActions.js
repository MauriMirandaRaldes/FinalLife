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
    },

    // postGame: (newGame)=> {

    //     const token = localStorage.getItem("token")

    //     return async (dispatch, getState)=> {
    //         try {
    //             if (token){
    //                 let data = await axios.post("http://localhost:8000/api/allGames", {newGame}, {headers: {"Authorization": "Bearer " + token}})
    //                 console.log(data)
    //             } else {
    //                 console.log("no hay usuario conectado")
    //             }
    //         } catch (error){
    //             console.log(error)
    //         }
    //     }
    // },

    modifyGame_addComment: ({text, gameId})=> {

        const token = localStorage.getItem("token")

        return async (dispatch, getState)=> {
            try {
                if (token){
                    let data = await axios.put(`http://localhost:8000/api/allGames/${gameId}`,{text}, {headers:{"Authorization":"Bearer " + token}})
                 
                    dispatch({
                        type:"updateGame",
                        payload:{
                            message:data.data.message,
                            updateGame:data.data.response
                        }
                    })
                } else {
                    console.log("no hay token")
                }
            } catch (error){
                console.log(error)
            }
        }
    },

    modifyGame_deleteComment: ({gameId, commentId})=> {
        return async (dispatch, getState)=> {
            try {
                let data = await axios.put("http://localhost:8000/api/allGames", {commentId, gameId})
                console.log(data)
                dispatch({
                    type:"updateGame2",
                    payload:{
                        message:data.data.message,
                        updateGame:data.data.response
                    }
                })
            } catch (error){
                console.log("error")
            }
        }
    }

}

export default gamesActions