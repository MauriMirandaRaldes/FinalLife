const Games = require("../models/gamesModel")

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
        let {firstname, photoURL} = req.user
        let date = new Date().toLocaleString()

        try {
            let data = await Games.findOneAndUpdate({_id:id}, {$push:{comments:{comment:text, date:date, autor:{firstname:firstname, photoURL:photoURL}}}}, {new:true})
            console.log(data)
            
            res.json({
                sucess: data? true : false,
                message: data? "Comment posted successfully" : "Fail to post, please try again",
                response: data? data : null 
            })

        } catch (error){
            console.log("error")
        }
    }

}

module.exports = GamesControllers