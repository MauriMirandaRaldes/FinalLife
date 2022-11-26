import { useState } from "react";
import Form_SignIn from "./form_signIn";
import Form_SignUp from "./form_signUp"

export default function RightCard (){

    const [signUp, setSignUp] = useState(true)
    const [signIn, setSignIn] = useState(false)

    const change = (e)=> {
        if (e.target.innerText === "Sign Up"){
            setSignUp(true)
            setSignIn(false)
        } else {
            setSignIn(true)
            setSignUp(false)
        }
    }

    return (
        <div className="containerLeftCard">
            <div className="leftCard">
            <div className="rightCardTop">
                <p onClick={change}>Sign Up</p>
                <p onClick={change}>Sign In</p>
            </div>
            <div className="containerForms">
                {signUp? <Form_SignUp/> : <Form_SignIn/>}
            </div>
            </div>
        </div>
    )
}