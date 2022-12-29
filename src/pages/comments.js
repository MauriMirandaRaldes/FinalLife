import {useState} from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch, useSelector} from "react-redux"
import gamesActions from "../redux/actions/gamesActions";
import EachComment from "../components/eachComment";

function MyVerticallyCenteredModal({show, onHide, id, commentsData}) {
  
  const user = useSelector(store => store.userReducer.user)
  const dispatch = useDispatch()
  const handleSubmit = async (e)=> {
    e.preventDefault()
    let data = {
      text:await e.target[0].value,
      gameId:await id
    }

    if (!e.target[0].value){
      alert("Tienes que escribir algo")
    } else {
      if (user){
        dispatch(gamesActions.modifyGame_addComment(data))
        e.target[0].value = ""
      } else {
        alert("Tienes que logearte para poder comentar")
      }
    }

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

      <div className="containerFormComments">
      <form className="commentsForm" onSubmit={handleSubmit}>
      <input placeholder="Add your comment" type={"text"} />
      <button type="submit">Submit</button>
      </form>
      </div>

      <div className="containerComponentComments">
      <EachComment user={user} gameId={id} dispatch={dispatch} gamesActions={gamesActions} commentsData={commentsData} />
      </div>

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