import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/welcome.css";
/*Assets*/
import Jostick from "../assets/jostick.png"
/*components*/
import BasicAlerts from "../components/alert";

function Welcome() {

    const [title, setTitle] = useState(false)
    const [alert, setAlert] = useState(false)
    const navigate = useNavigate()

    useEffect(()=> {
        setTimeout(() => {
            setAlert(true)
        }, 6000);
        setTimeout(() => {
            setAlert(false)
        }, 10000);
    },[])

    setTimeout(() => {
        setTitle("FinalLife")
    }, 1500);

    const pressJostick = ()=> {
        navigate("/home")
    }

  return (
    <>
    {alert? <BasicAlerts/> : null}
      <div className="container-welcome">
        <h3>Hello Gamer!</h3>
        <h2>Welcome to</h2>
      </div>
      <div className="container2-welcome">
      {title? <h1 className="custom-title" >{title}</h1> : null}
      {title? <img onClick={pressJostick} src={Jostick} /> : null}
      </div>
    </>
  );
}

export default Welcome;
