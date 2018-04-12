import React from 'react';
import { Modal, Button} from 'react-bootstrap';

const ModalPopup = (props) => {

    const {title, body, okButtonName, closeButtonName, handleClose, isShow} = props;

    const closeModal = () => {
        props.onCloseModal()
    }

    return (
        <div className="modal-containe">
          <Modal show={isShow} onHide={handleClose} aria-labelledby="contained-modal-title">
            <Modal.Header>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>{body}</Modal.Body>

            <Modal.Footer>
              <Button onClick={closeModal}>{closeButtonName}</Button>
              <Button onClick={closeModal} bsStyle="primary">{okButtonName}</Button>
            </Modal.Footer>
          </Modal>
        </div>
    )
}

export default ModalPopup;