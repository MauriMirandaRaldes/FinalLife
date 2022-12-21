import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from "react"
import {useNavigate} from "react-router-dom"
import CampaignIcon from '@mui/icons-material/Campaign';

function MyVerticallyCenteredModal(props) {

  const navigate = useNavigate()

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        No user found
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody" >
        <div className='containerSubModal'>
        <div className='containerIcon-noUserConected'>
        <CampaignIcon className="icon-noUserConected"/>
        </div>
        <div className='containerData-noUserConected'>
          <p>To add your own game you have to create an account. Have you already created an account?</p>
          <button onClick={()=> navigate("/registration")} >Go Login</button>
        </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function NoUserConected() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
       Click me
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default NoUserConected