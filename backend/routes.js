const Router = require("express").Router()

/*Games*/
const GamesControllers = require("./controllers/gamesControllers")
const {getGames, postGame, getOneGame} = GamesControllers

Router.route("/allGames")
.get(getGames)
.post(postGame)

Router.route("/allGames/:id")
.get(getOneGame)

module.exports = Router