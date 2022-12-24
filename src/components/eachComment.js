import React from "react"
import {useSelector, useDispatch} from "react-redux"
import sadGuy from "../assets/sad-guy.png"

export default function EachComment ({commentsData, dispatch, gamesActions, gameId}){
    const user = useSelector(store => store.userReducer.user)
    const userId = user? user.id : null
    const allComments = commentsData? commentsData : null

    const deleteComment = (commentId)=> {
        let data = {commentId, gameId}
        dispatch(gamesActions.modifyGame_deleteComment(data))
    }

    return (
        <>
        {allComments.length > 0? allComments.map((element,index) => element.autor.userId === userId?
         <div key={index} className="eachComment">
         <div className="containerDataAutor">
           <div className="containerPhotoAutor">
           <img src={element.autor.photoURL} />
           </div>
          <div className="containerInfo">
           <p>{element.autor.firstname}</p>
           <p>{element.date}</p>
          </div>
         </div>
         <div className="containerMyComment">
          <p>{element.comment}</p>
         </div>
         <div className="containerButtons">
            <button onClick={()=> deleteComment(element._id)}>Delete</button>
            <button>Modify</button>
            <button>Answer</button>
         </div>
         </div>
            : 
            <div key={index} className="eachComment">
            <div className="containerDataAutor">
              <div className="containerPhotoAutor">
              <img src={element.autor.photoURL} />
              </div>
             <div className="containerInfo">
              <p>{element.autor.firstname}</p>
              <p>{element.date}</p>
             </div>
            </div>
            <div className="containerComment">
             <p>{element.comment}</p>
            </div>
            </div>
        ) : <div className="containerNoComments">
        <p>This game has no comments yet, You can be the first!</p>
        <img src={sadGuy} />
        </div>}
        </>
    )
}