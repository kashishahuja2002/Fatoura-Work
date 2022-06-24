import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalCustom.css';

const InfoModal = (props) => {
    const [infoModal, setInfoModal] = useState(props.openInfoModal);
    // const [btnValue1, setBtnValue1] = useState("Cancel");
    const [btnValue2, setBtnValue2] = useState(props.btnValue2);
    
    const toggle = () => {
        setInfoModal(!infoModal);
        props.closeInfoModal(false);
    }

    var body = <>
            <div>Follow to these step to get the necessary data to fill the form and integrate to our servers.</div> <br />
            <ul>
                <li>Login to paypal dev dashboard using paypal business account email. Link - <a href="https://developer.paypal.com/home/" target="_blank" >https://developer.paypal.com/home/</a></li>
                <li>Go to Dashboard using top right corner menu option.</li>
                <li>You will be redirected to My apps and credentials page.</li>
                <li>Switch from sandbox to live (Live Button will turn blue).</li>
                <li>Scroll down and look for list of applications and click on the first one if you have multiple.</li>
                <li>You will be redirected to app details page, displaying App's Email, Client ID and Secret.</li>
                <li>Copy and paste these details in the "PayPal Payment Settings Form".</li>
                <li>Save these details.</li>
                <li>Go back to Paypal and same App details page (From where you just copied details)</li>
                <li>Scroll down a bit more and look for "Webhooks" and then "Add Webhook" button.</li>
                <li>Click on that button, it will open a form asking a URL and some checkboxes under Event Types label.</li>
                <li>Paste this URL in the URL field - https://api.fatoura.work/paypal/paypalWebhook.</li>
                <li>Look for "Invoicing invoice paid" checkbox in the "Event Types" list and mark it as checked.</li>
                <li>Save these and you are good to go.</li>
            </ul>
        </>

    const handleClick = () => {
        toggle();
    }

    return (
        <div>
            <Modal isOpen={infoModal} fade={false} toggle={toggle} className={props.className} backdrop="static">
                <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
                <ModalBody>
                    {body}
                </ModalBody>
                <ModalFooter>
                    {/* <Button className="white-button" onClick={handleClick} value={btnValue1}>{btnValue1}</Button> */}
                    <Button className="blue-button" onClick={handleClick} value={btnValue2}>{btnValue2}</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default InfoModal;