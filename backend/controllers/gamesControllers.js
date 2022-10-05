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

        let {title, image, platform, gender, story} = req.body
        let data = ""

        try {
            data = await new Games({
                name: title,
                image: image, 
                platform: platform,
                gender: gender, 
                story: story
            }).save()

            // console.log(data)

        } catch(error){
            console.log(error)
        }
        res.json({
            sucess: data? true : false,
            response: data? data : "error"
        })

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
    }

}

module.exports = GamesControllers