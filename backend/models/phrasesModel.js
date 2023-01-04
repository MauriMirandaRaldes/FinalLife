const mongoose = require("mongoose")

const PhrasesSchema = new mongoose.Schema(
    {
        phrase:{type:String, required:true},
        autor:{type:String, required:true},
        photo:{type:String, required:true}
    }
)

const Phrases = mongoose.model("phrases", PhrasesSchema)
module.exports = Phrases