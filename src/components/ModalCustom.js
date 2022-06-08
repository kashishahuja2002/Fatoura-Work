import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ImageCropper from './ImageCropper';
import './ModalCustom.css';


const ModalCustom = (props) => {
    const [modal, setModal] = useState(props.openModal);

    const toggle = () => {
        setModal(!modal);
        props.modalClosed();
    }

    return (
        <div>
            <Modal isOpen={modal} fade={false} toggle={toggle} className={props.className} backdrop="static">
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
                <p>Click on the image and drag the cursor to crop the image.</p>
                <ImageCropper />
            </ModalBody>
            <ModalFooter>
                <Button className="white-button" onClick={toggle}>Cancel</Button>{' '}
                <Button className="blue-button" onClick={toggle}>Preview</Button>
            </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalCustom;