import {useState} from "react"
import sadGuy from "../assets/sad-guy.png"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function EachComment ({commentsData, dispatch, gamesActions, gameId, user, captureData}){

    const userId = user?.id
    const allComments = commentsData? commentsData : null
    const [newComment, setNewComment] = useState()
    const [comingSoon, setComingSoon] = useState(false)

    /*Paso el estado de comingSoon del componente hijo al componente padre*/
    captureData.setAlert3(comingSoon)

    const deleteComment = (commentId)=> {
        let data = {commentId, gameId}
        dispatch(gamesActions.deleteComment(data))
    }

    /*Para modificar un comentario necesito enviar 3 cosas: el Id del juego, el Id del comentario y el nuevo texto*/
    const modifyComment = async (e)=> {
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

    /*Ordeno los comentarios de forma que queden los más nuevos al comienzo, y los más viejos atrás*/
    const box = []
    for (let i=allComments.length - 1; i >= 0; i--) {
        box.push(allComments[i])
    }

    const alertComingSoon = ()=> {
        captureData.setAlert(false)
        captureData.setAlert2(false)
        setComingSoon(true)
        setTimeout(() => {
            setComingSoon(false)
        }, 3000);
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
            <div className="containerResponseComment">
                <div className="containerLike">
                    <ThumbUpIcon onClick={alertComingSoon} className="likeIcon" fontSize="small" />
                    <p>0</p>
                </div>
                <div className="containerButtonAnswer">
                <button onClick={alertComingSoon}>Answer</button>
                </div>
         </div>
            </div>
        ) : <div className="containerNoComments">
        <p>This game has no comments yet, You can be the first!</p>
        <img src={sadGuy} />
        </div>}
        </>
    )
}