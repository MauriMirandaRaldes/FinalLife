import {useState} from "react"
import sadGuy from "../assets/sad-guy.png"

export default function EachComment ({commentsData, dispatch, gamesActions, gameId, user}){

    const userId = user?.id
    const allComments = commentsData? commentsData : null
    const [newComment, setNewComment] = useState()

    const deleteComment = (commentId)=> {
        let data = {commentId, gameId}
        dispatch(gamesActions.deleteComment(data))
    }

    const modifyComment = async (e)=> {
        // tengo que enviar a las actions 3 cosas: el id del juego, el id del comentario y el nuevo texto
        e.preventDefault()
        let data = {
            text: await e.target[0].value,
            gameId: gameId,
            commentId: newComment
        }
        if (!e.target[0].value){
            alert("Tienes que escribir algo")
        } else {
            dispatch(gamesActions.deleteComment(data))
        }
    }

    // Ordeno los elemntos de mi array en sentido contrario, para que los comentarios más nuevos se coloquen primero, y los más viejos por detrás
    const box = []
    for (let i=allComments.length - 1; i >= 0; i--) {
        box.push(allComments[i])
    }

    return (
        <>
         {allComments.length > 0? box.map((element,index) => element.autor.userId === userId?
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
           {newComment === element._id?
           <form className="formModifyComment" onSubmit={modifyComment}>
            <textarea className="resizeNone" type={"text"} defaultValue={element.comment} />
            <button type="submit">Submit</button>
           </form>
           :
           <p>{element.comment}</p>}
           {element.edited? <p className="edited">edited</p> : null}
         </div>
         <div className="containerButtons">
            <button onClick={()=> deleteComment(element._id)}>Delete</button>
            {newComment === element._id? <button className="cancelModifyComment" onClick={()=> setNewComment(false)} >Cancel</button> : <button onClick={()=> setNewComment(element._id)}>Modify</button> }
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
             {element.edited? <p className="edited">edited</p> : null}
            </div>
            </div>
        ) : <div className="containerNoComments">
        <p>This game has no comments yet, You can be the first!</p>
        <img src={sadGuy} />
        </div>}
        </>
    )
}