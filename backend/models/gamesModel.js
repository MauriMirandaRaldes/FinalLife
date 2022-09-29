const mongoose = require("mongoose")

const GamesSchema = new mongoose.Schema(
    {
        name: {type:String, required:true},
        image: {type:String, required:true},
        platform: {type:String, required:true},
        gender: {type:String, required:true},
        story: {type:String, required:true}
    }
)

const Games = mongoose.model("games", GamesSchema)
module.exports = Games