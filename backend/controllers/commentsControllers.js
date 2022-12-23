const Comments = require("../models/commentsModel")

const CommentsControllers = {

    addComment: async (req,res)=> {
        const newDate = new Date()
        const {photoURL, firstname, lastname} = req.user
        const {text} = req.body
        const date = newDate.toLocaleString()
        const name = firstname + " " + lastname

        try {
            let data = await new Comments({
                text:text,
                autor:name,
                date:date,
                photo:photoURL
            }).save()

            res.json({
                sucess:true,
                message:"Comment post sucessfully!",
                response:data
            })

        } catch(error){

            res.json({
                sucess:false,
                message:"Fail to post your comment, please try again",
                response:error
            })

        }

    },

}

module.exports = CommentsControllers