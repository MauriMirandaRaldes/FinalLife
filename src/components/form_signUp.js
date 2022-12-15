import {useState} from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
/*Redux*/
import {useDispatch, useSelector} from "react-redux"
import userActions from '../redux/actions/userActions';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function Form_SignUp() {

    const dispatch = useDispatch()
    const messageSignUp = useSelector(store => store.userReducer.message)
    const sucessMessage = useSelector (store => store.userReducer.sucessMessage)
    const [uncompleteFields, setUncompleteFields] = useState(false)
    const [differentPass, setDifferentPass] = useState(false)

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
          setUncompleteFields(true)
          setTimeout(() => {
            setUncompleteFields(false)
          }, 5000);
        } else {
          if (data.password !== data.password2){
            setDifferentPass(true)
            setTimeout(() => {
              setDifferentPass(false)
            }, 5000);
          } else {
            dispatch(userActions.signUp_user(data))
          }
        }

    }

    const firstname = messageSignUp? messageSignUp.filter(element => element.context.label === "firstname") : null
    const lastname = messageSignUp? messageSignUp.filter(element => element.context.label === "lastname") : null
    const email = messageSignUp? messageSignUp.filter(element => element.context.label === "email") : null
    const password = messageSignUp? messageSignUp.filter(element => element.context.label === "password") : null

  return (
    <Form className="formGeneralSignUp" onSubmit={sendData} >

      <div className='containerInputs'>
        {!sucessMessage?
        <>
         <div className='formGroup relative'>
        {uncompleteFields? <p className="absolute">Please complete all the fields</p> : null}
        <div className="relative">
        {firstname? firstname.length == 0? null : <p className="absolute">{firstname[0].message}</p> : null}
        <Form.Control className="input" type="text" placeholder="First name"/>
        </div>
        <div className="relative">
        {lastname? lastname.length == 0? null : <p className="absolute">{lastname[0].message}</p> : null}
        <Form.Control className="input" type="text" placeholder="Last name"/>
        </div>
        <Form.Control className='input' type="text" placeholder="Photo URL" />
      </div>
      <div className='formGroup relative'>
      {differentPass? <p className="absolute">Password do not match</p> : null}
      <div className="relative">
        {email? email.length == 0? null : <p className="absolute">{email[0].message}</p> : null}
        <Form.Control className="input" type="text" placeholder="Email"/>
        </div>
        <Form.Control className='input' type="password" placeholder="Password" />
        <div className="relative">
        {password? password.length == 0? null : <p className="absolute">{password[0].message}</p> : null}
        <Form.Control className="input" type="password" placeholder="Repeat Password"/>
        </div>
      </div>
        </> : 
        <div className="sucessDiv">
          <div className="containerIcon"><CheckBoxIcon className="sucessIcon" /></div>
          <div className="containerP"><p className="sucessP">{sucessMessage}</p></div>
        </div>
        }
      </div>
      <div className='containerButtonSubmit'>
        {!sucessMessage?
         <Button className="button-submit-signUp customButtonSubmit" variant="primary" type="submit">
         Create Account
         </Button>
         :
         <Button disabled className="button-submit-signUp customButtonSubmit" variant="primary" type="submit">
         Create Account
         </Button>  
      }
      </div>
      
    </Form>
  );
}

export default Form_SignUp;