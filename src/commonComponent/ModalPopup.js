import React from 'react';
import { Modal, Button} from 'react-bootstrap';

class ModalPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow : props.isShow
        }

        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.setState({
            isShow : false
        })
    }

    render() {

        const {title, body, okButtonName, closeButtonName, isShow, handleClose} = this.props;
        return (
            <div className="modal-containe">
              <Modal show={this.state.isShow} onHide={handleClose} aria-labelledby="contained-modal-title">
                <Modal.Header>
                  <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>{body}</Modal.Body>

                <Modal.Footer>
                  <Button onClick={this.closeModal}>{closeButtonName}</Button>
                  <Button onClick={this.closeModal} bsStyle="primary">{okButtonName}</Button>
                </Modal.Footer>
              </Modal>
            </div>
        )
    }

}

export default ModalPopup;