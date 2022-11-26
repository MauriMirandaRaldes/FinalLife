import React,{useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import {useSelector} from "react-redux"
/*My imports*/
import {Link as LinkRouter} from "react-router-dom"
/*Assets*/
import sadGuy from "../assets/sad-guy.png"

export default function Cards(props) {

  const user = useSelector(store => store.userReducer.user)

  /*Capturo las props que vienen de mi página "games" y coloco cada una en una constante*/
  const allGames = props.allGames
  const writtenGames = props.inputText
  const checkedGames = props.inputCheckbox

  /*Realizo el filtro cruzado entre el input de texto y los checkboxs*/
  const box = []
  const box2 = []
  if (writtenGames){
    writtenGames.map(element => {
      box.push(element)
      if (checkedGames){
        checkedGames.map(element2 => {
          let filterBox = box.filter(element3 => element3.gender == element2.gender)
          box2.push(...filterBox)
        })
      } else {
        box2.push(...writtenGames)
      }
    })
  } else {
    if (checkedGames){
      box2.push(...checkedGames)
    } else {
      box2.push(...allGames)
    }
  }

  /*En la const "finalBox" los datos recopilados de mis inputs y gracias al new Set los seteo sólo una vez*/
  const finalBox = []
  if (box2.length > 0){
    const once = new Set (box2)
    finalBox.push(...once)
  } 

  /*En la const "allNames" guardo los nombres de cada juego, ordenados de manera alfabética*/
  const allNames = []
  allGames.map(element => allNames.push(element.name))
  allNames.sort()

  /*En la const "orderElements" guardo los datos finales de mis filtros cruzados, seteados con el new Set y ordenados de la A a la Z*/
  const orderElements = []
  if (finalBox.length > 0){
    allNames.map(element => {
      let filterFinalBox = finalBox.filter(element2 => element2.name == element)
      orderElements.push(...filterFinalBox)
    })
  }

  /*RECORDATORIO DE MUI: El atributo "sx" me permite ingresar stylos de css en el mismo componente*/

  return (
    <div className="container-cards" >
        {orderElements.length > 0? orderElements.map(element => {

            let render = 
              <Card key={element.name}  sx={{ width: 300, height: 300, marginBottom: 4, backgroundColor: "red"}}>
                <LinkRouter to={`/details/${element._id}`} >
                <CardActionArea sx={{ backgroundColor: "red"}}>
                <CardMedia
                  sx={{objectFit: "cover"}}
                  component="img"
                  height="190"
                  image={`${element.image}`}
                  alt={`${element.image}`}
                />
                <CardContent sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                  <Typography sx={{fontSize: 20}} gutterBottom variant="h5" component="div">
                    {element.name}
                  </Typography>
                  <Typography sx={{fontSize: 15}} variant="body2" color="text.secondary">
                    {element.platform}
                  </Typography>
                  <Typography sx={{fontSize: 15}} variant="body2" color="text.secondary">
                    {element.gender}
                  </Typography>
                </CardContent>
              </CardActionArea>
                </LinkRouter>
            </Card>
            return render

        }) : <div className='container-notFound'>
               <img src={sadGuy} />
               <div className='container-linkrouter-cards'>
               <h2>Your game was not found but dont worry, you can add it clicking the link below</h2>
               <LinkRouter to={user? "/createGame" : "/noUserConected"}>
               <h3>Click Me</h3>
               </LinkRouter>
               </div>
             </div>}  
    </div>
  );
}
