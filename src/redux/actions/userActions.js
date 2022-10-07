import axios from "axios"

const userActions = {

    signUp_user: (newData)=> {

        return async (dispatch, getState)=> {

            try {
                let data = await axios.post("http://localhost:8000/api/signUp", newData)
                console.log(data)

            } catch(error){
                console.log(error)
            }

        }
    }

}

export default userActions