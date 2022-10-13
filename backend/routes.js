const Router = require("express").Router()
const passport = require("passport")
/*Validator*/
const validator = require("./config/validator")

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
const {signUp_user, verifyEmail, signIn_user, verifyToken} = userControllers

/*Sign up*/
Router.route("/signUp")
.post(validator, signUp_user)

/*Verification email*/
Router.route("/verification/:uniqueString")
.get(verifyEmail)

/*Sign in*/
Router.route("/signIn")
.post(signIn_user)

/*Passport*/
Router.route("/verifyToken")
.get(passport.authenticate("jwt", {session:false}), verifyToken) /*Primero pasa por passport, y si sale todo bien pasa al controlador*/

module.exports = Router