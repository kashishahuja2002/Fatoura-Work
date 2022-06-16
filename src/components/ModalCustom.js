import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ImageCropper from './ImageCropper';
import './ModalCustom.css';


const ModalCustom = (props) => {
    const [modal, setModal] = useState(props.openModal);
    const [btnValue1, setBtnValue1] = useState("Cancel");
    const [btnValue2, setBtnValue2] = useState(props.btnValue2);
    
    const toggle = () => {
        setModal(!modal);
        props.modalClosed();
    }
    
    const [croppedImage, setCroppedImage] = useState(props.src);
    const [showCrop, setShowCrop] = useState(false);

    const handleClick = (e) => {
        switch(e.target.value) {
            case "Cancel":
                toggle();
                break;

            case "Preview":
                setShowCrop(true);
                setBtnValue1("Back");
                setBtnValue2("Save");
                break;

            case "Back":
                setShowCrop(false);
                setBtnValue1("Cancel");
                setBtnValue2("Preview");
                break;

            case "Save":
                // dispatch
                toggle();
                break;

        }
    }

    return (
        <div>
            <Modal isOpen={modal} fade={false} toggle={toggle} className={props.className} backdrop="static">
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    {showCrop 
                        ? <img src={croppedImage} alt="Cropped" className="cropped-circular" />
                        : <ImageCropper src={props.src} setCroppedImage={setCroppedImage} />
                    }
                </ModalBody>
                <ModalFooter>
                    <Button className="white-button" onClick={handleClick} value={btnValue1}>{btnValue1}</Button>
                    <Button className="blue-button" onClick={handleClick} value={btnValue2}>{btnValue2}</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalCustom;