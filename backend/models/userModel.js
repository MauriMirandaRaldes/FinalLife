const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname: {type:String, required:true},
    lastname: {type:String, required:true},
    photoURL: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:Array, required:true},
    uniqueString: {type:String, required:true},
    verification: {type:Boolean, required:true},
    from: {type:Array}
})

const user = mongoose.model("users", userSchema)
module.exports = user