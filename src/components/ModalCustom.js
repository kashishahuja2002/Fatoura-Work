import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ImageCropper from './ImageCropper';
import './ModalCustom.css';
import { updateAvatar } from './profile/Redux/profileActions';
import { useDispatch } from 'react-redux';

const ModalCustom = (props) => {
    const [modal, setModal] = useState(props.openModal);
    const [btnValue1, setBtnValue1] = useState("Cancel");
    const [btnValue2, setBtnValue2] = useState(props.btnValue2);

    const dispatch = useDispatch();
    
    const toggle = () => {
        setModal(!modal);
        props.modalClosed();
    }

    const circleCrop = (props.id == "profile-picture" || props.id == "company-logo") ? true : false;

    const [croppedImage, setCroppedImage] = useState(props.src);
    if(croppedImage === props.src) {
        var file =  (croppedImage);
        const reader = new FileReader();
        reader.onload = function() {
            setCroppedImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    const handleCropChange = (img) => {
        setCroppedImage(img)
    }
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
                if(props.id == "profile-picture" || props.id == "company-logo") {
                    var body = {
                        "data": croppedImage
                    };
                    dispatch(updateAvatar(props.id, "post", body));
                }
                else if(props.id == "qr-code") {
                    props.setQrCode(croppedImage);
                }
                else if(props.id == "e-sign") {
                    props.setESign(croppedImage);
                }
                toggle();
                break;

            default:
                break;
        }
    }

    const modalTitle = (id) => {
        switch(id) {
            case "profile-picture":
                return "Update Profile Image";

            case "company-logo":
                return "Update Company Logo";

            case "qr-code":
                return "Add QR Code";

            case "e-sign":
                return "E-Sign Settings";

            default:
                return "Update";
        }
    }

    return (
        <div>
            <Modal isOpen={modal} fade={false} toggle={toggle} className={props.className} backdrop="static">
                <ModalHeader toggle={toggle}>{modalTitle(props.id)}</ModalHeader>
                <ModalBody>
                    {showCrop 
                        ? <img src={croppedImage} alt="Cropped" className="cropped-circular" />
                        : <ImageCropper src={URL.createObjectURL(props.src)} setCroppedImage={handleCropChange} circleCrop={circleCrop} />
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