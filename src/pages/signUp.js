import React from "react"
import "../styles/signUp.css"
import Form_SignUp from "../components/form_signUp"
import Form_SignIn from "../components/form_signIn"

function SignUp (){
    return (
        <div className="container-general-signUp" >
            <Form_SignUp/>
            <Form_SignIn/>
        </div>
    )
}

export default SignUp