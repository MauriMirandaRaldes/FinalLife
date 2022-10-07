const Router = require("express").Router()

/*Games*/
const GamesControllers = require("./controllers/gamesControllers")
const {getGames, postGame, getOneGame} = GamesControllers

Router.route("/allGames")
.get(getGames)
.post(postGame)
Router.route("/allGames/:id")
.get(getOneGame)

/*User*/
const userControllers = require("./controllers/userControllers")
const {signUp_user, verifyEmail} = userControllers

Router.route("/signUp")
.post(signUp_user)

/*Verification email*/
Router.route("/verification/:uniqueString")
.get(verifyEmail)

module.exports = Router