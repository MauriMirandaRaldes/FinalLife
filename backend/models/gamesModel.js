const mongoose = require("mongoose")

const GamesSchema = new mongoose.Schema(
    {
        name: {type:String, required:true},
        image: {type:String, required:true},
        image2: {type:String, required:true},
        image3: {type:String, required:true},
        image4: {type:String, required:true},
        platform: {type:String, required:true},
        gender: {type:String, required:true},
        story: {type:String, required:true},
        autor: {type:String},
        comments: [
            {
                comment:{type:String, required:true},
                date:{type:String, required:true},
                autor:{
                    firstname:{type:String, required:true},
                    photoURL:{type:String, required:true},
                    userId:{type:String, required:true}
                }
            }
        ],
    }
)

const Games = mongoose.model("games", GamesSchema)
module.exports = Games