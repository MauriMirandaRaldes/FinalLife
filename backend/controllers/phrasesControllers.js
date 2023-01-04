const Phrases = require("../models/phrasesModel")

const getAllPhrases = async (req,res)=> {

    try {
        let data = await Phrases.find()
        res.json({
            sucess: data? true : false,
            response: data? data : "error"
        })

    } catch(error){
        console.log("error")
    }

}

module.exports = getAllPhrases