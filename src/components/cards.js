import React,{useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { alpha, Box, Button, CardActionArea, CardActions } from '@mui/material';

export default function Cards(props) {

  const allGames = props.allGames
  const writtenGames = props.inputText
  const checkedGames = props.inputCheckbox

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
    }
  }

  /*La const "finalBox" guarda toda la data actualizada y filtrada. Por ahora "finalBox" es el resultado final para mapear */
  const finalBox = []
  if (box2.length > 0){
    const once = new Set (box2)
    finalBox.push(...once)
  }

  /*Cuando vuelva tengo que ver una manera de usar el método sort() para que los juegos estén ordenados por nombre de la A a la Z*/

  /*En MUI el atributo sx me permite ingresar stylos de css en el mismo componente*/

  return (
    <div className="container-cards" >
        {/* {box2.length > 0? box2.map(element => {

            let render = 
              <Card  key={element.name}  sx={{ width: 300, height: 300, marginBottom: 4, backgroundColor: "red"}}>
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
            </Card>
            return render

        }) : <h2>Not Found</h2>}   */}
    </div>
  );
}
