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

    }

}

module.exports = GamesControllers