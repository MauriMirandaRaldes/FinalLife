const Router = require("express").Router()

/*Games*/
const GamesControllers = require("./controllers/gamesControllers")
const {getGames} = GamesControllers

Router.route("/allGames")
.get(getGames)

module.exports = Router