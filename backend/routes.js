const Router = require("express").Router()
const passport = require("passport")
/*Validator*/
const validator = require("./config/validator")

/*Phrases*/
const getAllPhrases = require("./controllers/phrasesControllers")
Router.route("/allPhrases")
.get(getAllPhrases)

/*Games*/
const GamesControllers = require("./controllers/gamesControllers")
const {getGames, getOneGame, modifyGame_addComment, deleteComment} = GamesControllers

// solamente se puede utilizar un metodo http por ruta creada, no pueden usarse más de una vez. ejemplo: 2 put, 2 post, etc.. solo uno metodo http y no repetirlo
Router.route("/allGames")
.get(getGames)
.put(passport.authenticate("jwt", {session:false}), deleteComment)

Router.route("/allGames/:id")
.put(passport.authenticate("jwt", {session:false}), modifyGame_addComment)
.get(getOneGame)

/*User*/
const userControllers = require("./controllers/userControllers")
const {signUp_user, verifyEmail, signIn_user, verifyToken, signOut_user} = userControllers

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

/*Sign out*/
Router.route("/signOut")
.post(signOut_user)

/*Comments*/
const commentsControllers = require("./controllers/commentsControllers")
const {addComment} = commentsControllers

Router.route("/comments")
.post(passport.authenticate("jwt", {session:false}), addComment)

module.exports = Router