require("dotenv").config()
const cors = require("cors")
const express = require("express")
require("./config/dataBase")
const Router = require("./routes")
const passport = require("./config/passport")

const PORT = process.env.PORT

const app = express()

// app.get("/", (req, res)=> res.send("Hola"))

/*Middlewares*/
app.use(cors())
app.use(express.json())
app.use("/api", Router)
app.use(passport.initialize())

// app.listen tiene dos parametros, el puerto y una función que envía una respuesta
app.listen(PORT, ()=> console.log(`Ready on port ${PORT}`))