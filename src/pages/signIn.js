import React from "react"
import "../styles/signIn.css"
/*Bootstrap*/
import Form_SignIn from "../components/form_signIn"


function SignIn (){
    return (
        <div className="container-general-signIn">
            <Form_SignIn/>
        </div>
    )
}

export default SignIn