import {useState} from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch, useSelector} from "react-redux"
import gamesActions from "../redux/actions/gamesActions";
import EachComment from "../components/eachComment";

function MyVerticallyCenteredModal({show, onHide, id, commentsData}) {
  
  const user = useSelector(store => store.userReducer.user)
  const dispatch = useDispatch()
  const [alert, setAlert] = useState(false)
  const [alert2, setAlert2] = useState(false)
  const [alert3, setAlert3] = useState()

  const handleSubmit = async (e)=> {
    e.preventDefault()
    let data = {
      text:await e.target[0].value,
      gameId:await id
    }

    if (!e.target[0].value){
      setAlert2(false)
      setAlert3(false)
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 3000);
    } else {
      if (user){
        dispatch(gamesActions.modifyGame_addComment(data))
        e.target[0].value = ""
      } else {
        setAlert(false)
        setAlert3(false)
        setAlert2(true)
        setTimeout(() => {
          setAlert2(false)
        }, 3000);
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

        {alert? <p className="alertNoText">You must write something</p> : alert2? <p className="alertNoText">You need login for write a comment</p> : alert3? <p className="alertNoText">Coming Soon..</p> : null }

      <form className="commentsForm" onSubmit={handleSubmit}>
      <input className="focus" placeholder="Add your comment" type={"text"} />
      <button type="submit">Submit</button>
      </form>

      </div>

      <div className="containerComponentComments">
      <EachComment captureData={{setAlert, setAlert2, setAlert3}} user={user} gameId={id} dispatch={dispatch} gamesActions={gamesActions} commentsData={commentsData} />
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