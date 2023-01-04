import axios from "axios"

const phrasesActions = {

    getAllPhrases: ()=> {
        return async (dispatch, getState)=> {

           try {
            const data = await axios.get("http://localhost:8000/api/allPhrases")
            dispatch({
                type:"getAllPhrases",
                payload: data.data.response
            })

           } catch(error){
            console.log(error)
           }

        }
    }

}

export default phrasesActions