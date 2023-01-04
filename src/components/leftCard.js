import { useState } from "react";
import Form_SignIn from "./form_signIn";
import Form_SignUp from "./form_signUp"

export default function LeftCard (){

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
            <div className="rightCardTop background1">
                <p className={`optionChange ${signUp? "wordSignUp" : "hover"}`} onClick={change}>Sign Up<span className="borderBottom"></span></p>
                <p className={`optionChange   ${signIn? "wordSignIn" : "hover"}`} onClick={change}>Sign In<span className="borderBottom2"></span></p>
            </div>
            <div className="containerForms">
                {signUp? <Form_SignUp/> : <Form_SignIn/>}
            </div>
            </div>
        </div>
    )
}