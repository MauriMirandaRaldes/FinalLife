import axios from "axios"

const CommentsActions = {

    addComment: (text)=> {

        const token = localStorage.getItem("token")

        return async (dispatch, getState)=> {
            try {
                if (token){
                    let data = await axios.post("http://localhost:8000/api/comments",{text:text}, {headers: {"Authorization": "Bearer " + token}})
                    console.log(data)
                } else {
                    console.log("No hay usuario conectado")
                }
            } catch (error){
                console.log(error)
            }
        }
    }

}

export default CommentsActions