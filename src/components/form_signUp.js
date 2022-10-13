import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
/*Redux*/
import {useDispatch, useSelector} from "react-redux"
import userActions from '../redux/actions/userActions';
/*Assets*/
import jostick from "../assets/jostick.png"

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

        if (data.firstname == "" || data.lastname == "" || data.photoURL == "" || data.email == "" || data.password == "" || data.password2 == ""){
          alert("You must complete all the fields")
        } else {
          if (data.password !== data.password2){
            alert("Passwords do not match")
          } else {
            dispatch(userActions.signUp_user(data))
          }
        }

    }

  return (
    <Form className="form-general-signUp" onSubmit={sendData} >

      <Form.Group className="custom-form-signUp" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control className="custom-input-signUp" type="text" placeholder="Enter your name" />
        <Form.Label>Last Name</Form.Label>
        <Form.Control className='custom-input-signUp' type="text" placeholder="Enter your lastname" />
        <Form.Label>Photo URL</Form.Label>
        <Form.Control className='custom-input-signUp' type="text" placeholder="Enter a photo URL" />
        <Form.Label>Email adress</Form.Label>
        <Form.Control className='custom-input-signUp' type="email" placeholder="Enter your email" />
        <Form.Label>Password</Form.Label>
        <Form.Control className='custom-input-signUp' type="password" placeholder="Enter a password" />
        <Form.Label>Repeat password</Form.Label>
        <Form.Control className='custom-input-signUp' type="password" placeholder="Repeat password" />
        <Button className="button-submit-signUp" variant="primary" type="submit">
        Submit
        </Button>
      </Form.Group>
      <div className='container-img-signUp'>
        <img src={jostick} />
      </div>
      
    </Form>
  );
}

export default Form_SignUp;