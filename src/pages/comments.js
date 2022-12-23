import {useState} from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch} from "react-redux"
import gamesActions from "../redux/actions/gamesActions";
import sadGuy from "../assets/sad-guy.png"

function MyVerticallyCenteredModal({show, onHide, id, commentsData}) {

  const dispatch = useDispatch()

  const handleSubmit = async (e)=> {
    e.preventDefault()
    let data = {
      text:await e.target[0].value,
      gameId:await id
    }
    dispatch(gamesActions.modifyGame_addComment(data))
  }

  return (
    <Modal
      className="container-commentsModal"
      show={show}
      onHide={onHide}
      centered
      size="xl"
    >
      <div className="commentsModal">
      <Modal.Header className="modalHeader" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Comments
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody-comments" >
      <form className="commentsForm" onSubmit={handleSubmit}>
      <input placeholder="Add your comment" type={"text"} />
      <button type="submit">Submit</button>
      </form>

        {commentsData? commentsData.length > 0? commentsData.map((element, index) => (
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
        ))
        : 
        <div className="containerNoComments">
        <p>This game has no comments yet, You can be the first!</p>
        <img src={sadGuy} />
        </div>
        : null}
      </Modal.Body>
      </div>
    </Modal>
  );
}

function Comments({id, commentsData}) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
       Comments
      </Button>

      <MyVerticallyCenteredModal
        commentsData={commentsData}
        id={id}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Comments