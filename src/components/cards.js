import React,{useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Cards(props) {

  const games = props.allGames

  /*En MUI el atributo sx me permite ingresar stylos de css en el mismo componente*/

  return (
    <div className="container-cards" >
        {games.map(element => {

            let render = 
              <Card sx={{ width: 300, height: 300, marginBottom: 4, backgroundColor: "red"}}>
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
        })}
    </div>
  );
}
