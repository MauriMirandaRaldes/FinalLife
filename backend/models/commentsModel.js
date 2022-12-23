const mongoose = require("mongoose")

const CommentsSchema = new mongoose.Schema(
    {
        text: {type:String, required:true},
        autor: {type:String, required:true},
        date: {type:String, required:true},
        photo: {type:String, required:true}
    }
)

const Comments = mongoose.model("comments", CommentsSchema)
module.exports = Comments