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
    <Form className="formGeneralSignUp" onSubmit={sendData} >

      <div className='containerInputs'>
      <div className='formGroup'>
        <Form.Control className="input" type="text" placeholder="Name" />
        <Form.Control className='input' type="text" placeholder="Last name" />
        <Form.Control className='input' type="text" placeholder="Photo URL" />
        </div>
        <div className='formGroup'>
        <Form.Control className='input' type="email" placeholder="Email" />
        <Form.Control className='input' type="password" placeholder="Password" />
        <Form.Control className='input' type="password" placeholder="Repeat password" />
        </div>
      </div>
      <div className='containerButtonSubmit'>
      <Button className="button-submit-signUp" variant="primary" type="submit">
      Create Account
      </Button>
      </div>
      
    </Form>
  );
}

export default Form_SignUp;