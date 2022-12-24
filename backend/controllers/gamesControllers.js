const Games = require("../models/gamesModel")
const crypto = require("crypto")
const { CommentsDisabledSharp } = require("@mui/icons-material")

const GamesControllers = {

    getGames: async (req, res)=> {

        let data = ""

        try {
            data = await Games.find()
        } catch(error){
            console.log(error)
        }
        res.json(
            {
                sucess: data? true : false,
                response: data
            }
        )

    },

    postGame: async (req,res)=> {

        console.log(req.body)

    },

    getOneGame: async (req,res)=> {

        let data = ""

        try {
            data = await Games.findOne({_id:req.params.id})
            
        } catch (error){

        }
        res.json({
            sucess: data? true : false,
            response: data? data : "error"
        })
    },

    modifyGame_addComment: async (req,res)=> {
        let {id} = req.params
        let {text} = req.body
        let {firstname, photoURL, _id} = req.user
        let date = new Date().toLocaleString()

        try {
            let data = await Games.findOneAndUpdate({_id:id}, {$push:{comments:{comment:text, date:date, autor:{firstname:firstname, photoURL:photoURL, userId:_id}}}}, {new:true})
            
            res.json({
                sucess: data? true : false,
                message: data? "Comment posted successfully" : "Fail to post, please try again",
                response: data? data : null 
            })

        } catch (error){
            console.log("error")
        }
    },

    modifyGame_deleteComment: async (req,res)=> {
        let {commentId, gameId} = req.body

        try {
            let data = await Games.findOneAndUpdate({_id:gameId},{$pull:{comments:{_id:commentId}}}, {new:true})
            res.json({
                sucess: data? true : false,
                message: data? "Comment deleted successfully" : "Fail to delete, please try again",
                response: data? data : null 
            })

        } catch (error){
            console.log("error")
        }
    }

}

module.exports = GamesControllers