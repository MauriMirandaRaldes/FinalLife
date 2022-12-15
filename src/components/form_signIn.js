import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
/*Redux*/
import userActions from "../redux/actions/userActions"
import {useDispatch, useSelector} from "react-redux"

function Form_SignIn() {

  const dispatch = useDispatch()

  /*Capturamos los datos del formulario y los enviamos a las actions*/
  const sendData = async (e)=> {
    e.preventDefault()

    let data = {
      email: await e.target[0].value,
      password: await e.target[1].value,
      from: "signIn"
    }

    dispatch(userActions.signIn_user(data))
  }

  return (
    <Form className="formGeneralSignIn" onSubmit={sendData} >

      <div className='containerInputs2'>
      <div className='formGroup2'>
        <Form.Control className="input" type="text" placeholder="Email" />
        <Form.Control className='input' type="password" placeholder="Password" />
      </div>
      </div>
      <div className='containerButtonSubmit'>
        <Button className="button-submit-signUp customButtonSubmit" variant="primary" type="submit">
        Log In
        </Button>
      </div>

    </Form>
  );
}

export default Form_SignIn;