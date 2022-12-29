const Games = require("../models/gamesModel");
const crypto = require("crypto");

const GamesControllers = {
  getGames: async (req, res) => {
    let data = "";

    try {
      data = await Games.find();
    } catch (error) {
      console.log(error);
    }
    res.json({
      sucess: data ? true : false,
      response: data,
    });
  },

  postGame: async (req, res) => {
    console.log(req.body);
  },

  getOneGame: async (req, res) => {
    let data = "";

    try {
      data = await Games.findOne({ _id: req.params.id });
    } catch (error) {}
    res.json({
      sucess: data ? true : false,
      response: data ? data : "error",
    });
  },

  modifyGame_addComment: async (req, res) => {
    let { id } = req.params;
    let { text } = req.body;
    let { firstname, photoURL, _id } = req.user;
    let date = new Date().toLocaleString();

    try {
      let data = await Games.findOneAndUpdate(
        { _id: id },
        {
          $push: {
            comments: {
              comment: text,
              date: date,
              autor: { firstname: firstname, photoURL: photoURL, userId: _id },
              edited: false
            },
          },
        },
        { new: true }
      );

      res.json({
        sucess: data ? true : false,
        message: data
          ? "Comment posted successfully"
          : "Fail to post, please try again",
        response: data ? data : null,
      });
    } catch (error) {
      console.log("error");
    }
  },

  deleteComment: async (req, res) => {
    let { commentId, gameId, text } = req.body;
    let { firstname, photoURL, _id } = req.user;
    let date = new Date().toLocaleString()

    if (!text){
        try {
            let data = await Games.findOneAndUpdate(
              { _id: gameId },
              { $pull: { comments: { _id: commentId } } },
              { new: true }
            );
            res.json({
              sucess: data ? true : false,
              message: data
                ? "Comment deleted successfully"
                : "Fail to delete, please try again",
              response: data ? data : null,
            });
          } catch (error) {
            console.log("error");
          }
    } else {
        try {
          let data = await Games.findOneAndUpdate({_id:gameId}, {$pull:{comments:{_id:commentId}}} ,{new:true})
          let data2 = await Games.findOneAndUpdate({_id:gameId}, {$push: {comments: { comment: text, date: date, autor: { firstname: firstname, photoURL: photoURL, userId: _id }, edited:true}}}, {new:true})

          res.json({
            sucess: data2? true : false,
            message: data2? "Comment modify sucessfully" : "Fail to modify, try again",
            response: data2? data2 : null
          })
            
          } catch (error) {
            console.log("error");
          }
    }

  },
};

module.exports = GamesControllers;
