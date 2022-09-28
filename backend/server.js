const express = require("express")
require("dotenv").config()
require("./config/dataBase")
const app = express()
const PORT = 4000

app.use(express.json())

app.listen(()=> console.log(`Ready on port ${PORT}`))