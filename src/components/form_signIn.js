import React,{useState} from "react"
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
    <Form onSubmit={sendData} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Form_SignIn;