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
    },

    signIn_user: (newData)=> {

        return async (dispatch, getState)=> {

            try {
                let data = await axios.post("http://localhost:8000/api/signIn", newData)
                console.log(data)

                if (data.data.sucess){

                    localStorage.setItem("token", data.data.response.token)

                    dispatch({
                        type: "signIn",
                        payload: {
                            user: data.data.response.data,
                            message: data.data.message
                        }
                    })

                } else {

                    dispatch({
                        type: "signIn",
                        payload: {
                            user: data.data.response,
                            message: data.data.message
                        }
                    })

                }

            } catch (error){
                console.log(error)
            }

        }
    },

    /*Ésta función recibe como parámetro el token proveniente del localStorage, generado al momento que el usuario se logeó*/
    verifyToken: (token)=> {
        return async (dispatch, getState)=> {

            try {
                let data = await axios.get("http://localhost:8000/api/verifyToken", {headers: {"Authorization": "Bearer " + token}})

                if (data.data.sucess){

                    dispatch({
                        type: "signIn",
                        payload: {
                            user: data.data.response,
                            message: data.data.message
                        }
                    })
                    
                } else {

                    dispatch({
                        type: "signIn",
                        payload: {
                            user: data.data.response,
                            message: data.data.message
                        }
                    })

                }


            } catch (error){

                if (error.response.status === 401){

                    dispatch({
                        type: "signIn",
                        payload: {
                            user: "error",
                            message: "Session expired, please sign in again"
                        }
                    })

                    localStorage.removeItem("token")

                }

            }

        }
    }

}

export default userActions