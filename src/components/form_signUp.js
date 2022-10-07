import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
/*Redux*/
import {useDispatch, useSelector} from "react-redux"
import userActions from '../redux/actions/userActions';

function Form_SignUp() {

    const dispatch = useDispatch()

    /*Capturo la data de mis inputs y la envío por parámetro a mis actions*/
    const sendData = async (e)=> {
        e.preventDefault()
        let data = {
            firstname: await e.target[0].value,
            lastname: await e.target[1].value,
            photoURL: await e.target[2].value,
            email: await e.target[3].value,
            password: await e.target[4].value,
            password2: await e.target[5].value,
            from: "signUp"
        }

        if (data.password == data.password2){
            dispatch(userActions.signUp_user(data))
        } else {
            alert("Los passwords no coinciden")
        }

    }

  return (
    <Form onSubmit={sendData} >
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your lastname" />
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" placeholder="Enter a photo URL" />
        <Form.Label>Email adress</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter a password" />
        <Form.Label></Form.Label>
        <Form.Control type="password" placeholder="Repeat password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Form_SignUp;