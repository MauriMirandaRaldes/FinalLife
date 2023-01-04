import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
/*My imports*/
import { Link as LinkRouter } from "react-router-dom";
import NoUserConected from "../pages/noUserConected";
import { useCrossFilters } from "../customHooks/useCrossFilters";
import { useGetUser } from "../customHooks/useSelector";
/*Assets*/
import sadGuy from "../assets/sad-guy.png";

/*RECORDATORIO DE MUI: El atributo "sx" me permite ingresar stylos de css en el mismo componente*/

export default function Cards({games, requiredGames, checkedGames}) {

  const {orderElements} = useCrossFilters({games, requiredGames, checkedGames})
  const {user} = useGetUser()

  return (
    <div className="container-cards">
      {orderElements.length > 0 ? (
        orderElements.map((element) => (
          <Card
            key={element.name}
            sx={{
              width: 300,
              height: 300,
              marginBottom: 4,
              backgroundColor: "red",
            }}
          >
            <LinkRouter to={`/details/${element._id}`}>
              <CardActionArea sx={{ backgroundColor: "red" }}>
                <CardMedia
                  sx={{ objectFit: "cover" }}
                  component="img"
                  height="190"
                  image={`${element.image}`}
                  alt={`${element.image}`}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{ fontSize: 20 }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {element.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </LinkRouter>
          </Card>
        ))
      ) : (
        <div className="container-notFound">
          <img src={sadGuy} />
          <div className="container-linkrouter-cards">
            <h2>
              Your game was not found but dont worry, you can add it clicking
              the link below
            </h2>
            {user ? (
              <LinkRouter to={"/createGame"}>
                <h3>Click Me</h3>
              </LinkRouter>
            ) : (
              <NoUserConected />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
